"use client";

import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";

export default function DashboardPage() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Sidebar />
      <main
        className={`pt-16 md:pt-10 md:pb-10 w-full transition-all duration-300 ${
          isCollapsed ? "md:ml-[88px]" : "md:ml-[232px]"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-400 mb-10">
            GitHub Dashboard
          </h1>

          {/* GitHub Stats and Top Languages */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <img
              src="https://github-readme-stats.vercel.app/api?username=zycro21&show_icons=true&theme=radical"
              alt="GitHub Stats"
              className="rounded-lg w-full md:w-1/2"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=zycro21&layout=compact&theme=radical"
              alt="Top Languages"
              className="rounded-lg w-full md:w-1/2"
            />
          </div>

          {/* GitHub Contribution Graph */}
          <h2 className="text-2xl font-semibold text-green-400 mb-6">
            Contribution Graph
          </h2>
          <div className="overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/zycro21"
              alt="GitHub Contributions"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
