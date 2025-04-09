"use client";

import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import { db } from "@/src/lib/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { loadFromStorage, saveToStorage } from "@/src/utils/localStorage";

interface Message {
  id?: string;
  name: string;
  avatar: string;
  text: string;
  createdAt?: Timestamp;
}

export default function ChatPage() {
  const { isCollapsed } = useSidebar();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [typingUser, setTypingUser] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Message),
        }))
      );
    });

    const storedName = loadFromStorage("chatName");
    const storedAvatar = loadFromStorage("chatAvatar");
    if (storedName) setName(storedName);
    if (storedAvatar) setAvatar(storedAvatar);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const typingRef = collection(db, "typingStatus");
    const unsubscribe = onSnapshot(typingRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const data = change.doc.data();
        if (data.name !== name && data.isTyping) {
          setTypingUser(data.name);
        } else {
          setTypingUser(null);
        }
      });
    });
    return () => unsubscribe();
  }, [name]);

  useEffect(() => {
    // Auto scroll to bottom
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;
    if (!name || !avatar) return alert("Please upload avatar and enter name.");

    await addDoc(collection(db, "messages"), {
      name,
      avatar,
      text: input,
      createdAt: serverTimestamp(),
    });
    setInput("");

    // Reset typing
    await setDoc(doc(db, "typingStatus", name), {
      name,
      isTyping: false,
    });
  };

  const handleTyping = async (val: string) => {
    setInput(val);
    await setDoc(doc(db, "typingStatus", name), {
      name,
      isTyping: val.trim() !== "",
    });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setAvatar(result);
        saveToStorage("chatAvatar", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    saveToStorage("chatName", e.target.value);
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirm) return;
    await deleteDoc(doc(db, "messages", id));
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Sidebar />
      <main
        className={`pt-16 md:pt-10 md:pb-10 w-full transition-all duration-300 ${
          isCollapsed ? "md:ml-[88px]" : "md:ml-[232px]"
        }`}
      >
        <div className="max-w-screen-md mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Chat Room</h1>

          {!name || !avatar ? (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Enter Your Info</h2>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-2 mb-4 rounded bg-gray-700 text-white"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="mb-4"
              />
              {avatar && (
                <div className="flex justify-center">
                  <Image
                    src={avatar}
                    alt="Avatar Preview"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </div>
          ) : null}

          {/* MESSAGE LIST */}
          <div
            ref={scrollRef}
            className="bg-gray-800 rounded-lg p-4 h-[60vh] sm:h-[500px] overflow-y-auto space-y-4"
          >
            {messages.map((msg) => {
              const isMe = msg.name === name;
              return (
                <div
                  key={msg.id}
                  className={`relative flex items-start gap-3 px-4 py-2 rounded-lg w-fit max-w-[85%] break-words transition-all duration-300 ${
                    isMe
                      ? "ml-auto bg-green-700 flex-row-reverse"
                      : "bg-blue-700"
                  }`}
                >
                  <Image
                    src={msg.avatar}
                    alt={msg.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover mt-1"
                  />
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        isMe ? "text-green-200 text-right" : "text-green-300"
                      }`}
                    >
                      {msg.name}
                    </p>
                    <p className={`${isMe ? "text-right" : ""}`}>{msg.text}</p>
                  </div>
                  {isMe && (
                    <button
                      onClick={() => handleDelete(msg.id!)}
                      className="absolute top-1 right-1 text-sm text-red-300 hover:text-red-500"
                      title="Delete"
                    >
                      ✕
                    </button>
                  )}
                </div>
              );
            })}

            {/* TYPING INDICATOR */}
            {typingUser && (
              <div className="text-sm text-gray-400 italic">
                {typingUser} is typing...
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="mt-4 flex gap-2">
            <input
              className="flex-1 px-4 py-2 rounded bg-gray-700 text-white"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => handleTyping(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={!name || !avatar}
            />
            <button
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded disabled:opacity-50"
              onClick={handleSend}
              disabled={!name || !avatar}
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
