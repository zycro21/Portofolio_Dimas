"use client";

import Image from "next/image";
import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import Divider from "@/src/components/DividerLine";
import { useEffect, useState } from "react";

interface CodewarsData {
  username: string;
  honor: number;
  clan: string | null;
  leaderboardPosition: number;
  skills: string[];
  codeChallenges: {
    totalAuthored: number;
    totalCompleted: number;
  };
}

export default function DashboardPage() {
  const { isCollapsed } = useSidebar();

  const [codewars, setCodewars] = useState<CodewarsData | null>(null);

  useEffect(() => {
    const fetchCodewars = async () => {
      const res = await fetch("/api/codewars");
      const data = await res.json();
      setCodewars(data);
    };

    fetchCodewars();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Sidebar />
      <main
        className={`pt-16 md:pt-10 md:pb-10 w-full transition-all duration-300 ${
          isCollapsed ? "md:ml-[88px]" : "md:ml-[232px]"
        }`}
      >
        <div className="max-w-screen-lg mx-auto px-4 text-left">
          {/* ===== JUDUL DAN DESKRIPSI DASHBOARD ===== */}
          <div className="mb-12 text-left">
            <h1 className="text-4xl font-bold text-green-400 mb-2">
              Dashboard
            </h1>
            <p className="text-gray-300 text-lg">
              Ini adalah dashboard pribadi saya yang menampilkan statistik
              GitHub, aktivitas kontribusi, serta performa di Codewars.
            </p>
          </div>

          <Divider />

          <div className="mb-6">
            {/* ===== GITHUB SECTION TITLE ===== */}
            <h2 className="text-4xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <Image
                src="/images/github.svg"
                alt="GitHub Logo"
                width={32}
                height={32}
              />
              GitHub
            </h2>

            {/* ===== GITHUB STATS & TOP LANGUAGES ===== */}
            <div className="flex flex-col lg:flex-row justify-start items-start gap-6 mb-12">
              <div className="w-full max-w-[500px]">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=zycro21&show_icons=true&theme=radical"
                  alt="GitHub Stats"
                  className="rounded-lg w-full h-auto object-contain"
                />
              </div>
              <div className="w-full lg:w-1/2 max-w-md">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=zycro21&layout=compact&theme=radical"
                  alt="Top Languages"
                  className="rounded-lg w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* ===== STREAK CARDS ===== */}
            <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center gap-2">
              <img src="/images/github.svg" alt="GitHub" className="w-8 h-8" />
              GitHub Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Total Contributions
                </h3>
                <p className="text-3xl font-bold text-green-400">102</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Longest Streak
                </h3>
                <p className="text-3xl font-bold text-green-400">26 Days</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Start Coding
                </h3>
                <p className="text-3xl font-bold text-green-400">
                  Aug 14, 2022
                </p>
              </div>
            </div>

            {/* ===== CONTRIBUTION GRAPH ===== */}
            <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center gap-2">
              <img src="/images/github.svg" alt="GitHub" className="w-8 h-8" />
              Contribution Graph
            </h2>
            <div className="overflow-x-auto mb-12">
              <img
                src="https://ghchart.rshah.org/zycro21"
                alt="GitHub Contributions"
                className="w-full max-w-6xl mx-auto"
              />
            </div>
          </div>

          <Divider />

          {/* ===== CODEWARS STATS ===== */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              <Image
                src="/images/codewars.svg"
                alt="Codewars Logo"
                width={32}
                height={32}
              />
              Codewars
            </h2>

            {codewars ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Username
                  </h3>
                  <p className="text-2xl font-bold text-purple-400">
                    {codewars.username}
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Honor
                  </h3>
                  <p className="text-2xl font-bold text-purple-400">
                    {codewars.honor}
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Completed Challenges
                  </h3>
                  <p className="text-2xl font-bold text-purple-400">
                    {codewars.codeChallenges.totalCompleted}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">Memuat data dari Codewars...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
