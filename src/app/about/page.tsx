"use client";

import Sidebar from "@/src/components/Sidebar";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useSidebar } from "@/src/context/SidebarContext";
import HistoryCard from "@/src/components/HistoryCard";
import Divider from "@/src/components/DividerLine";
import { motion } from "framer-motion";

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
            className="mb-20 max-w-screen-lg mx-auto px-4 mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={sectionVariants}
          >
            <h1 className="text-4xl font-bold text-green-400 mb-6">
              Who Am I?
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed text-justify mb-6">
              Saya adalah seorang <strong>software engineer</strong> dengan
              fokus utama pada <strong>pengembangan back-end</strong> dan{" "}
              <strong>implementasi sistem dev-ops</strong>. Ketertarikan saya
              terhadap bagaimana sistem dapat berjalan secara efisien dan
              scalable membuat saya selalu tertantang untuk membangun arsitektur
              yang stabil, cepat, dan mudah dipelihara. Saya menikmati proses di
              balik layar, seperti mendesain struktur database, membuat endpoint
              API yang efisien, hingga memikirkan alur deployment yang seamless
              untuk mendukung kinerja tim dan produk.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed text-justify mb-6">
              Dalam keseharian, saya terbiasa menggunakan berbagai teknologi
              seperti <strong>Node.js, Express.js, PostgreSQL, MongoDB</strong>{" "}
              untuk kebutuhan backend, serta{" "}
              <strong>
                Docker, GitHub Actions, dan Amazon Web Services (AWS)
              </strong>{" "}
              untuk keperluan dev-ops dan cloud infrastructure. Saya percaya
              bahwa <strong>otomasi dan monitoring</strong> adalah fondasi
              penting dalam pengembangan perangkat lunak modern, dan saya senang
              ketika dapat menyederhanakan proses kompleks menjadi workflow yang
              efisien dan terukur. Selain itu, saya juga sering melakukan
              optimasi performa dan integrasi pipeline CI/CD untuk mempercepat
              siklus rilis aplikasi.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              Saat ini, saya sedang memperluas cakupan keahlian saya dengan
              mendalami bidang <strong>Artificial Intelligence (AI)</strong> dan{" "}
              <strong>Machine Learning (ML)</strong>. Ketertarikan saya muncul
              dari keinginan untuk memahami bagaimana teknologi ini dapat
              digunakan untuk memecahkan masalah nyata secara cerdas dan
              adaptif. Saya tengah mempelajari algoritma dasar seperti{" "}
              <strong>
                supervised learning, neural networks, dan deep learning
              </strong>
              , serta mencoba membangun beberapa prototipe sederhana yang dapat
              terintegrasi dengan sistem backend. Saya yakin bahwa kombinasi
              antara kemampuan backend yang solid dan wawasan di bidang AI/ML
              akan menjadi fondasi kuat untuk menghadapi tantangan teknologi
              masa depan.
            </p>
          </motion.section>

          <Divider />

          {/* Section 2: Career History */}
          <motion.section
            className="mb-20 max-w-screen-lg mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold text-green-400 mb-6 flex items-center gap-3">
              <FaBriefcase className="text-green-400 text-2xl" />
              Career
            </h2>
            <div className="flex flex-col gap-6">
              <HistoryCard
                logo="/images/superspring.png"
                title="SUPERSPRING (GPS.id)"
                role="Software Developer - Backend, Dev-Ops Focus"
                place="Surabaya, Jawa Timur"
                duration="October 2024 – Now"
                details={[
                  "Developing and optimizing backend APIs for real-time GPS data processing, while enhancing database and caching mechanisms to efficiently handle large-scale GPS data (Golang, Node.js - Express/NestJS, PostgreSQL TimescaleDB, PostGIS, Redis, and MQTT)",
                  "Managing server deployment, including CI/CD pipelines and cloud infrastructure, to ensure system scalability (Docker, Kubernetes, GitHub Actions, GitLab, and AWS Platform)",
                  "Implementing monitoring and logging systems to maintain service performance and stability (Grafana and ELK Stack-Elasticsearch, Logstash, Kibana)",
                ]}
              />
              <HistoryCard
                logo="/images/temudataku.png"
                title="TemuDataku"
                role="Mentor & PIC Web Development"
                place="Malang, Jawa Timur"
                duration="November 2024 – Now"
                details={[
                  "Guiding mentees in understanding Data Science and Machine Learning concepts.",
                  "Preparing learning materials and presentations (PPTs, modules, video tutorials) (Canva)",
                  "Providing feedback and evaluations on mentees' progress.",
                ]}
              />
              <HistoryCard
                logo="/images/interaktif.jpeg"
                title="InterActive Technologies Corp"
                role="FullStack Developer (Internship)"
                place="Remote / Surabaya, Jawa Timur"
                duration="February 2024 – May 2024"
                details={[
                  "Designing and developing web applications using React and Vue for the frontend, Node.js and Golang for the backend.",
                  "Managing and optimizing PostgreSQL databases through indexing, partitioning, query tuning, and multi-level transactions.",
                  "Implementing CI/CD pipelines with Docker for seamless deployment and high availability in production environments.",
                ]}
              />
              <HistoryCard
                logo="/images/arkatama_logo.jpeg"
                title="PT Arkatama Multi Solusindo"
                role="Back-End Engineer (Internship)"
                place="Malang, Jawa Timur"
                duration="August 2023 – January 2024"
                details={[
                  "Designing and developing REST APIs for web-based applications using Node.js-JavaScript/TypeScript (and its frameworks) and Laravel (PHP).",
                  "Managing and optimizing databases using MySQL, PostgreSQL, and MongoDB.",
                  "Developing and maintaining system architectures using both monolithic and microservices approaches.",
                ]}
              />
            </div>
          </motion.section>

          <Divider />

          {/* Section 3: Education History */}
          <motion.section
            className="mb-20 max-w-screen-lg mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold text-green-400 mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-green-400 text-2xl" />
              Education
            </h2>
            <div className="flex flex-col gap-6">
              <HistoryCard
                logo="/images/ub-logo-small.png"
                title="Universitas Brawijaya"
                role="Diploma in Information Technology"
                place="Malang, Jawa Timur"
                duration="2021 - 2024"
                details={[
                  "Inventory Management System – A web-based application for managing stock, recording inbound/outbound transactions, and tracking inventory in real time. (Laravel, PostgreSQL, Livewire, Bootstrap CSS)",
                  "Library Management System – A web-based application designed to handle book borrowing and returns, member registration, and library activity reports. (Laravel, MySQL, Tailwind CSS, Inertia.js)",
                  "Face Recognition-Based Attendance Management System – A mobile and web application that enables employees to check in automatically using Face Recognition technology, complemented by GPS-based location validation. The system records attendance in real time. (Flutter, React.js, Node.js (Express.js), PostgreSQL, TensorFlow, Firebase, Google Maps API)",
                  "Trekit – Travel Planning Application – A web-based platform for planning trips, tracking itineraries, booking tickets, and automatically displaying weather information. (Next.js, Node.js (Express.js), Google Maps API, OpenWeather API, PostgreSQL)",
                  "GameX – Game Rental Platform – A website platform that allows users to rent digital or physical games through a subscription or one-time payment system. Features include a game catalog, user reviews, a recommendation system, and rental transaction management. (React.js, Express.js, MySQL, Duitku Payment Gateway)",
                  "Machine Learning-Based Movie Recommendation System – An application that provides personalized movie recommendations based on user preferences and viewing history. Uses Collaborative Filtering and Content-Based Filtering algorithms to analyze patterns and deliver tailored suggestions. (Python, TensorFlow, Flask, Next.js, Tailwind CSS, PostgreSQL, TMDb API, Docker)",
                  "B-Care (Final Project) – An AI-powered mobile application designed to detect early signs of baby blues in postpartum mothers through facial expression and emotional pattern analysis using Computer Vision. Equipped with features for consultation, education, and a support community for pregnant and postpartum mothers. (Flutter, Node.js (Express.js), Python, TensorFlow, TensorFlow.js, Firebase, Google Cloud Platform)",
                ]}
              />
              <HistoryCard
                logo="/images/bangkit.jpg"
                title="BANGKIT by Google, GO-TO, & Traveloka"
                role="Machine Learning and Cloud Computing Mentee"
                place="Online"
                duration="2023"
                details={[
                  "Nutrient-Based Healthy Food Recommendation System – A mobile application that provides healthy food recommendations based on users' health conditions, such as diabetes, hypertension, obesity, or specific nutritional needs (e.g., low-calorie or high-protein diets) by leveraging Machine Learning and Big Data.",
                  "Al-Qur'an Text-to-Speech Application – A mobile application that enables users to listen to Quranic verses in audio format using Text-to-Speech (TTS) technology (Implementation of Machine Learning).",
                ]}
              />
              <HistoryCard
                logo="/images/sman2.jpg"
                title="SMA Negeri 2 Sidoarjo"
                role="Student"
                place="Sidoarjo"
                duration="2019 - 2021"
                details={[
                  "Belajar dasar-dasar pemrograman",
                  "Mengerjakan proyek akhir sistem kasir",
                ]}
              />
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
