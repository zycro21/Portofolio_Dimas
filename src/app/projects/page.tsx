"use client";

import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import { motion } from "framer-motion";
import ProjectCard from "@/src/components/ProjectCard";

export default function ProjectsPage() {
  const { isCollapsed } = useSidebar();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const projects = [
    {
      title: "Portofolio (Mochamad Dimas Putra Hermawan)",
      thumbnail: "/images/project_2.png",
      description:
        "Website ini merupakan portofolio pribadi interaktif yang menampilkan profil, keahlian, proyek-proyek, pengalaman, dan contact form.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      projectUrl: "-",
      repoUrl: "https://github.com/zycro21/Portofolio_Dimas",
    },
    {
      title: "Project Planner (Trekit)",
      thumbnail: "/images/project_3.png",
      description:
        "Trekit adalah aplikasi Web App manajemen objek perjalanan yang memudahkan pengguna dalam merencanakan, mengatur, dan memantau itinerary perjalanan mereka.",
      techStack: [
        "Next.js",
        "Typescript",
        "Node.js (Express)",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ],
      projectUrl: "-",
      repoUrl: "https://github.com/zycro21/project_planner_trekit/tree/main",
    },
    {
      title: "TemuDataku",
      thumbnail: "/images/project_5.png",
      description: "CLI tool untuk generate blog statis dari markdown file.",
      techStack: ["PostgreSQL", "TypeScript", "Node.js", "Next.js", "Docker"],
      projectUrl: "https://temudataku.com",
      repoUrl: "https://github.com/zycro21/temudataku",
    },
    {
      title: "Game-X",
      thumbnail: "/images/project_4.png",
      description:
        "Game-X adalah aplikasi berbasis web yang digunakan sebagai tempat melakukan penjualan dan pembelian untuk game.",
      techStack: ["MySQL", "PHP (Laravel)", "MongoDB", "React.js"],
      projectUrl: "-",
      repoUrl: "https://github.com/zycro21/projek-gamex",
    },
    {
      title: "Website Klinik Mental - Implementasi Machine Learning",
      thumbnail: "/images/project_6.png",
      description:
        "Website Klinik Mental berbasis web yang dilengkapi dengan fitur Machine Learning untuk melakukan prediksi kesehatan mental berdasarkan data pasien.",
      techStack: [
        "Go (Gin)",
        "Next.js",
        "PostgreSQL",
        "Machine Learning (Python)",
        "Redis",
      ],
      projectUrl: "-",
      repoUrl: [
        "https://github.com/zycro21/mental_health_klinik",
        "https://github.com/zycro21/mental_health_machine_learning_API",
      ],
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
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Ubah dari whileInView ke animate */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={0}
            variants={sectionVariants}
            className="mb-20"
          >
            <h1 className="text-4xl font-bold text-green-400 mb-10 text-center">
              My Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
