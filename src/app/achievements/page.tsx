"use client";

import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import Divider from "@/src/components/DividerLine";
import { motion } from "framer-motion";

export default function AchievementsPage() {
  const { isCollapsed } = useSidebar();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
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
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Section 1: Prestasi */}
          <motion.section
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={sectionVariants}
          >
            <h1 className="text-4xl font-bold text-green-400 mb-6">
              My Achievements
            </h1>
            <ul className="list-disc ml-6 text-gray-300 space-y-4 text-lg">
              <li>🏆 1st Place – Hackathon XYZ 2023 (Team Leader & Backend)</li>
              <li>🥈 Runner Up – Web Development Competition ABC 2022</li>
              <li>
                🎓 Best Graduate Project – Final Year Software Engineering 2023
              </li>
            </ul>
          </motion.section>

          <Divider />

          {/* Section 2: Sertifikat */}
          <motion.section
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold text-green-400 mb-6">
              Certifications & Licenses
            </h2>
            <ul className="list-disc ml-6 text-gray-300 space-y-4 text-lg">
              <li>📜 Backend Developer Path – Dicoding Indonesia (2023)</li>
              <li>📜 DevOps Fundamentals – Coursera (2024)</li>
              <li>
                📜 Machine Learning Specialization – DeepLearning.AI (ongoing)
              </li>
            </ul>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
