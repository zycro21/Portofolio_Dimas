"use client";

import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import Divider from "@/src/components/DividerLine";
import { useState } from "react";
import { motion } from "framer-motion";

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
      cta: "Let's work together!",
      username: "dimashermawan2103@gmail.com",
      url: "mailto:dimashermawan2103@gmail.com",
      color: "from-pink-400 to-red-600",
      logo: "images/gmail.svg",
      font: "font-semibold",
    },
    {
      name: "WhatsApp",
      cta: "Let's chat!",
      username: "+62 853-3619-6913",
      url: "https://wa.me/6285336196913",
      color: "from-green-400 to-green-600",
      logo: "images/whatsapp.svg",
      font: "italic",
    },
    {
      name: "Instagram",
      cta: "Check my visuals!",
      username: "@zcrn21",
      url: "https://www.instagram.com/zcrn21/",
      color: "from-pink-500 to-purple-600",
      logo: "images/instagram.svg",
      font: "font-light",
    },
    {
      name: "LinkedIn",
      cta: "Connect with me!",
      username: "in/mochamaddimasputrahermawan",
      url: "https://www.linkedin.com/in/mochamaddimasputrahermawan",
      color: "from-blue-500 to-blue-700",
      logo: "images/linkedin.svg",
      font: "font-medium",
    },
    {
      name: "GitHub",
      cta: "Explore my code!",
      username: "@zycro21",
      url: "https://github.com/zycro21",
      color: "from-gray-700 to-black",
      logo: "images/github.svg",
      font: "font-mono",
    },
    {
      name: "TikTok",
      cta: "Catch my content!",
      username: "@dimpi889900",
      url: "https://www.tiktok.com/@dimpi889900",
      color: "from-black to-pink-700",
      logo: "images/tiktok.svg",
      font: "font-bold italic",
    },
  ];

  const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

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
          <motion.div
            className="text-left mb-6 mt-2"
            initial="hidden"
            animate="visible"
            variants={titleVariant}
          >
            <h1 className="text-4xl font-bold text-green-400 mb-2">Contact</h1>
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            custom={1}
          >
            Ingin terhubung? Berikut beberapa cara untuk menghubungi saya. Bisa
            lewat email, media sosial, atau langsung kirim pesan lewat form di
            bawah!
          </motion.p>

          <Divider />

          {/* ===== CONTACT CARDS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialContacts.map((contact, index) => (
              <motion.div
                key={index}
                className={`relative flex justify-between items-center p-6 rounded-xl bg-gradient-to-r ${contact.color} shadow-lg h-64 overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 15px 25px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Logo Transparan, lebih ke kiri */}
                <div
                  className="absolute inset-0 bg-no-repeat opacity-10"
                  style={{
                    backgroundImage: `url(${contact.logo})`,
                    backgroundSize: "80%",
                    backgroundPosition: "left 0.5rem center",
                  }}
                ></div>

                {/* Konten kiri */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold">{contact.cta}</h3>
                  <p className={`text-sm mb-4 ${contact.font}`}>
                    {contact.username}
                  </p>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm bg-white text-black rounded hover:bg-gray-200 transition"
                  >
                    Go to {contact.name}
                  </a>
                </div>

                {/* Logo kanan versi jelas, animasi hover */}
                <motion.div
                  className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-white/20 border border-white/40 backdrop-blur-sm"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={contact.logo}
                    alt={contact.name}
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <Divider />

          {/* ===== EMAIL FORM ===== */}
          <div className="bg-gray-800 p-6 rounded-lg mt-8">
            <motion.h2
              className="text-2xl font-bold mb-4 text-green-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact Me Now
            </motion.h2>

            {/* Input: Name & Email sejajar */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded bg-gray-700 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded bg-gray-700 text-white"
              />
            </div>

            {/* Textarea */}
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              ></textarea>
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
