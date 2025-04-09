"use client";

import Link from "next/link";
import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import Divider from "@/src/components/DividerLine";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSqlite,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNestjs,
  SiVite,
  SiPrisma,
  SiRedux,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiLinux,
  SiNginx,
  SiPostman,
  SiJenkins,
  SiCloudflare,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  PostgreSQL: "#336791",
  MongoDB: "#47A248",
  MySQL: "#00758F",
  Redis: "#DC382D",
  SQLite: "#003B57",
  Express: "#000000",
  React: "#61DAFB",
  Nextjs: "#000000",
  TailwindCSS: "#38BDF8",
  Bootstrap: "#7952B3",
  NestJS: "#E0234E",
  Vite: "#646CFF",
  Prisma: "#0C344B",
  Redux: "#764ABC",
  Docker: "#2496ED",
  "CI/CD": "#2088FF",
  Git: "#F05032",
  Linux: "#FCC624",
  Nginx: "#009639",
  Postman: "#FF6C37",
  Jenkins: "#D24939",
  Cloudflare: "#F38020",
};

const SkillBadge = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => {
  const iconColor = skillColors[label] || "#ffffff";

  return (
    <span className="flex items-center gap-3 bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded-full border border-gray-700 transition-transform duration-300 hover:scale-110 hover:bg-green-500 hover:text-black shadow-md">
      <Icon className="text-2xl" style={{ color: iconColor }} />
      {label}
    </span>
  );
};

const heroVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Sidebar />
      <main
        className={`pt-16 md:pt-10 md:pb-10 w-full transition-all duration-300 ${
          isCollapsed ? "md:ml-[88px]" : "md:ml-[232px]"
        }`}
      >
        <div className="max-w-screen-lg mx-auto px-4">
          {/* Hero Section */}
          <motion.section
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mb-18 mt-5 flex flex-col items-center justify-center text-center"
          >
            <motion.h1
              className="text-5xl font-bold hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <span className="inline-block group relative">
                Hi, I’m{" "}
                <span className="text-green-400 hover:text-green-300 transition-colors duration-300">
                  Mochamad Dimas Putra Hermawan
                </span>{" "}
                <motion.span
                  whileHover={{ rotate: [0, 20, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="inline-block ml-2 cursor-pointer"
                >
                  👋
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-300 max-w-4xl"
              variants={itemVariants}
            >
              I&apos;m a passionate
              <strong className="text-white">Backend Developer</strong> with an
              interest in <strong className="text-white">DevOps</strong>.
              Currently, I’m diving deep into{" "}
              <strong className="text-white">Machine Learning</strong> and{" "}
              <strong className="text-white">Artificial Intelligence</strong>. I
              love building scalable systems and automating development
              workflows.
            </motion.p>
          </motion.section>

          <Divider />

          {/* Skills Section */}
          <section className="mb-18">
            <h2 className="text-3xl font-semibold text-white mb-6">
              My Skills
            </h2>

            {/* Languages & Databases */}
            <div className="mb-10 overflow-hidden">
              <h3 className="text-xl text-gray-400 mb-3">
                Languages & Databases
              </h3>
              <div className="relative w-full overflow-hidden group">
                <div className="flex animate-scroll group-hover:[animation-play-state:paused] gap-4 whitespace-nowrap w-max">
                  {[
                    { icon: SiJavascript, label: "JavaScript" },
                    { icon: SiTypescript, label: "TypeScript" },
                    { icon: SiPython, label: "Python" },
                    { icon: SiPostgresql, label: "PostgreSQL" },
                    { icon: SiMongodb, label: "MongoDB" },
                    { icon: SiMysql, label: "MySQL" },
                    { icon: SiRedis, label: "Redis" },
                    { icon: SiSqlite, label: "SQLite" },
                  ]
                    .concat([
                      // Duplicate the same list to create infinite loop effect
                      { icon: SiJavascript, label: "JavaScript" },
                      { icon: SiTypescript, label: "TypeScript" },
                      { icon: SiPython, label: "Python" },
                      { icon: SiPostgresql, label: "PostgreSQL" },
                      { icon: SiMongodb, label: "MongoDB" },
                      { icon: SiMysql, label: "MySQL" },
                      { icon: SiRedis, label: "Redis" },
                      { icon: SiSqlite, label: "SQLite" },
                    ])
                    .map((skill, idx) => (
                      <SkillBadge
                        key={idx}
                        icon={skill.icon}
                        label={skill.label}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-10 overflow-hidden">
              <h3 className="text-xl text-gray-400 mb-3">Frameworks</h3>
              <div className="relative w-full overflow-hidden group">
                <div className="flex animate-scroll group-hover:[animation-play-state:paused] gap-4 whitespace-nowrap w-max">
                  {[
                    { icon: SiExpress, label: "Express" },
                    { icon: SiNextdotjs, label: "Next.js" },
                    { icon: SiReact, label: "React" },
                    { icon: SiTailwindcss, label: "TailwindCSS" },
                    { icon: SiBootstrap, label: "Bootstrap" },
                    { icon: SiNestjs, label: "NestJS" },
                    { icon: SiVite, label: "Vite" },
                    { icon: SiPrisma, label: "Prisma" },
                    { icon: SiRedux, label: "Redux" },
                  ]
                    .concat([
                      { icon: SiExpress, label: "Express" },
                      { icon: SiNextdotjs, label: "Next.js" },
                      { icon: SiReact, label: "React" },
                      { icon: SiTailwindcss, label: "TailwindCSS" },
                      { icon: SiBootstrap, label: "Bootstrap" },
                      { icon: SiNestjs, label: "NestJS" },
                      { icon: SiVite, label: "Vite" },
                      { icon: SiPrisma, label: "Prisma" },
                      { icon: SiRedux, label: "Redux" },
                    ])
                    .map((skill, idx) => (
                      <SkillBadge
                        key={idx}
                        icon={skill.icon}
                        label={skill.label}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* DevOps Tools */}
            <div className="overflow-hidden">
              <h3 className="text-xl text-gray-400 mb-3">DevOps Tools</h3>
              <div className="relative w-full overflow-hidden group">
                <div className="flex animate-scroll group-hover:[animation-play-state:paused] gap-4 whitespace-nowrap w-max">
                  {[
                    { icon: SiDocker, label: "Docker" },
                    { icon: SiGithubactions, label: "CI/CD" },
                    { icon: SiGit, label: "Git" },
                    { icon: SiLinux, label: "Linux" },
                    { icon: SiNginx, label: "Nginx" },
                    { icon: SiPostman, label: "Postman" },
                    { icon: SiJenkins, label: "Jenkins" },
                    { icon: SiCloudflare, label: "Cloudflare" },
                  ]
                    .concat([
                      { icon: SiDocker, label: "Docker" },
                      { icon: SiGithubactions, label: "CI/CD" },
                      { icon: SiGit, label: "Git" },
                      { icon: SiLinux, label: "Linux" },
                      { icon: SiNginx, label: "Nginx" },
                      { icon: SiPostman, label: "Postman" },
                      { icon: SiJenkins, label: "Jenkins" },
                      { icon: SiCloudflare, label: "Cloudflare" },
                    ])
                    .map((skill, idx) => (
                      <SkillBadge
                        key={idx}
                        icon={skill.icon}
                        label={skill.label}
                      />
                    ))}
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* Services Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-500 text-center mb-6">
              What I Offer
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
              As a backend-focused developer with a passion for automation, I
              provide services tailored to build robust, scalable, and smart web
              systems.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Backend Development",
                  desc: "Building scalable REST APIs, GraphQL endpoints, and server-side logic with Node.js, Express, NestJS, and more.",
                },
                {
                  title: "DevOps & Automation",
                  desc: "CI/CD pipelines, Dockerization, Linux server setup, and efficient infrastructure deployment practices.",
                },
                {
                  title: "AI-Powered Features",
                  desc: "Experimenting with integrating ML/AI tools to bring smart features into your applications.",
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-400/30 transition duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Button */}
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-block bg-green-500 hover:bg-green-400 text-white font-medium py-3 px-6 rounded transition duration-300 hover:scale-105"
              >
                Contact Me
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
