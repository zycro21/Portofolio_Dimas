"use client";

import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import Divider from "@/src/components/DividerLine";
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
      title: "Portofolio Website",
      thumbnail: "/images/portfolio.png",
      description:
        "Website pribadi untuk menampilkan profil, proyek, dan kontak.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      projectUrl: "https://your-portfolio-link.com",
      repoUrl: "https://github.com/username/portfolio",
    },
    {
      title: "Project Management API",
      thumbnail: "/images/api.png",
      description: "Backend API untuk mengelola proyek, tugas, dan user roles.",
      techStack: ["Express", "PostgreSQL", "Prisma"],
      projectUrl: "-",
      repoUrl: "https://github.com/username/project-api",
    },
    {
      title: "Markdown Blog Generator",
      thumbnail: "/images/blog.png",
      description: "CLI tool untuk generate blog statis dari markdown file.",
      techStack: ["Node.js", "Commander.js"],
      projectUrl: "-",
      repoUrl: "-",
    },
    {
      title: "Markdown Blog Generator",
      thumbnail: "/images/blog.png",
      description: "CLI tool untuk generate blog statis dari markdown file.",
      techStack: ["Node.js", "Commander.js"],
      projectUrl: "-",
      repoUrl: "-",
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
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={sectionVariants}
            className="mb-20"
          >
            <h1 className="text-4xl font-bold text-green-400 mb-10 text-center">
              My Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
