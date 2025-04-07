"use client";

import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import Divider from "@/src/components/DividerLine";
import { useState } from "react";

export default function ContactPage() {
  const { isCollapsed } = useSidebar();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const mailto = `mailto:dimashermawan2103@gmail.com?subject=Message from ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
    window.location.href = mailto;
  };

  const socialContacts = [
    {
      name: "Gmail",
      username: "dimashermawan2103@gmail.com",
      url: "mailto:dimashermawan2103@gmail.com",
      color: "from-pink-400 to-red-600",
      logo: "/gmail.svg",
    },
    {
      name: "WhatsApp",
      username: "+62 812-3456-7890",
      url: "https://wa.me/6281234567890",
      color: "from-green-400 to-green-600",
      logo: "/whatsapp.svg",
    },
    {
      name: "Instagram",
      username: "@your_instagram",
      url: "https://instagram.com/your_instagram",
      color: "from-pink-500 to-purple-600",
      logo: "/instagram.svg",
    },
    {
      name: "LinkedIn",
      username: "linkedin.com/in/yourname",
      url: "https://linkedin.com/in/yourname",
      color: "from-blue-500 to-blue-700",
      logo: "/linkedin.svg",
    },
    {
      name: "GitHub",
      username: "@zycro21",
      url: "https://github.com/zycro21",
      color: "from-gray-700 to-black",
      logo: "/github.svg",
    },
    {
      name: "TikTok",
      username: "@your_tiktok",
      url: "https://tiktok.com/@your_tiktok",
      color: "from-black to-pink-700",
      logo: "/tiktok.svg",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Sidebar />
      <main
        className={`pt-16 md:pt-10 md:pb-10 w-full transition-all duration-300 ${
          isCollapsed ? "md:ml-[88px]" : "md:ml-[232px]"
        }`}
      >
        <div className="max-w-screen-lg mx-auto px-4">
          {/* ===== TITLE & DESCRIPTION ===== */}
          <div className="text-left mb-6">
            <h1 className="text-4xl font-bold text-green-400 mb-2">Contact</h1>
            <p className="text-gray-300 text-lg">
              Ingin terhubung? Berikut beberapa cara untuk menghubungi saya.
              Bisa lewat email, media sosial, atau langsung kirim pesan lewat
              form di bawah!
            </p>
          </div>

          <Divider />

          {/* ===== CONTACT CARDS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialContacts.map((contact, index) => (
              <div
                key={index}
                className={`relative flex justify-between items-center p-6 rounded-xl bg-gradient-to-r ${contact.color} shadow-lg h-56 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Background Logo Transparan */}
                <div
                  className="absolute inset-0 bg-no-repeat bg-center opacity-10"
                  style={{
                    backgroundImage: `url(${contact.logo})`,
                    backgroundSize: "80%",
                  }}
                ></div>

                {/* Konten kiri */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold">{contact.name}</h3>
                  <p className="text-sm mb-4">{contact.username}</p>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm bg-white text-black rounded hover:bg-gray-200 transition"
                  >
                    Go to {contact.name}
                  </a>
                </div>

                {/* Logo kanan versi jelas */}
                <div className="relative z-10 w-16 h-16">
                  <img
                    src={contact.logo}
                    alt={contact.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <Divider />

          {/* ===== EMAIL FORM ===== */}
          <div className="bg-gray-800 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              Kirim Pesan Langsung
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white font-semibold"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
