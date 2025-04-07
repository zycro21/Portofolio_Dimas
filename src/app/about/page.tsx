"use client";

import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import Divider from "@/src/components/DividerLine";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const { isCollapsed } = useSidebar();

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
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
          {/* Section 1: Tentang Saya */}
          <motion.section
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={sectionVariants}
          >
            <h1 className="text-4xl font-bold text-green-400 mb-6">
              Who Am I?
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
              I’m Mochamad Dimas Putra Hermawan, a passionate software engineer
              with a strong focus on backend development. I'm driven by a
              curiosity to understand how systems scale, deploy, and interact
              efficiently. I love working on real-world problems and crafting
              solutions that matter.
            </p>
          </motion.section>

          <Divider />

          {/* Section 2: Perjalanan Pendidikan */}
          <motion.section
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold text-green-400 mb-6">
              My Education Journey
            </h2>
            <ul className="list-disc ml-6 text-gray-300 space-y-4">
              <li>
                <strong>Universitas XYZ</strong> – Bachelor in Computer Science
                (2019–2023)
              </li>
              <li>
                <strong>SMK ABC</strong> – Rekayasa Perangkat Lunak (2016–2019)
              </li>
              <li>
                <strong>SD & SMP</strong> – Kota Bandung
              </li>
            </ul>
          </motion.section>

          <Divider />

          {/* Section 3: Minat */}
          <motion.section
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold text-green-400 mb-6">
              Interests & Passion
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
              I'm deeply interested in <strong>Backend Development</strong> and
              <strong> DevOps</strong>, including infrastructure automation and
              CI/CD pipelines. Lately, I’ve been exploring{" "}
              <strong>Machine Learning</strong> and{" "}
              <strong>Artificial Intelligence</strong> to broaden my engineering
              perspective and see how they integrate into modern software.
            </p>
          </motion.section>

          <Divider />

          {/* Section 4: Galeri Foto */}
          <motion.section
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold text-green-400 mb-6">
              My Moments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"].map((src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`Photo ${idx + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-64"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
