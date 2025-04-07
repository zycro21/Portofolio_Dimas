"use client";

import Sidebar from "@/src/components/Sidebar";
import { useSidebar } from "@/src/context/SidebarContext";
import Divider from "@/src/components/DividerLine";

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
        <div className="max-w-screen-lg mx-auto px-4 text-left">
          {/* ===== JUDUL DAN DESKRIPSI DASHBOARD ===== */}
          <div className="mb-12 text-left">
            <h1 className="text-4xl font-bold text-green-400 mb-2">
              Dashboard
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Ini adalah dashboard pribadi saya yang menampilkan statistik ,
              bahasa pemrograman yang paling sering digunakan, serta grafik
              kontribusi selama setahun terakhir.
            </p>
          </div>

          <div className="mb-6">
            {/* ===== GITHUB SECTION TITLE ===== */}
            <h2 className="text-4xl font-bold text-green-400 mb-4">GITHUB</h2>

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
            {/* ===== CONTRIBUTION GRAPH ===== */}
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Github Contribution Graph
            </h2>
            <div className="overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/zycro21"
                alt="GitHub Contributions"
                className="w-full max-w-4xl mx-auto"
              />
            </div>
          </div>
        </div>

        <Divider />


      </main>
    </div>
  );
}
