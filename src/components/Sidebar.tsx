"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
  FaAward,
  FaChartBar,
  FaCommentDots,
} from "react-icons/fa";
import { useSidebar } from "@/src/context/SidebarContext";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebar();

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "/about", icon: <FaAward /> },
    { name: "Achievements", href: "/achievements", icon: <FaChartBar /> },
    { name: "Projects", href: "/projects", icon: <FaProjectDiagram /> },
    { name: "Dashboard", href: "/dashboard", icon: <FaChartBar /> },
    { name: "Chat Room", href: "/chat", icon: <FaCommentDots /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col h-screen bg-gray-900 text-white fixed left-0 top-0 shadow-lg transition-all duration-300
        ${isCollapsed ? "w-20" : "w-64"}`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-4 top-4 bg-gray-700 hover:bg-gray-600 transition p-1 rounded-full shadow z-50 border border-white"
        >
          {isCollapsed ? (
            <IoChevronForwardOutline className="text-white text-lg" />
          ) : (
            <IoChevronBackOutline className="text-white text-lg" />
          )}
        </button>

        {/* Profile Section */}
        <div className="w-full flex justify-center mt-6 transition-all duration-300">
          <div
            className={`overflow-hidden border-2 border-gray-500 shadow-md rounded-full transition-all duration-300
      ${isCollapsed ? "w-12 h-12" : "w-24 h-24"}`}
          >
            <Image
              src="/images/foto_dimas.jpg"
              alt="Profile"
              width={108}
              height={108}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Info */}
        {!isCollapsed && (
          <>
            <h2 className="mt-4 text-lg font-semibold text-center px-4 leading-snug transition-all duration-300">
              Mochamad Dimas Putra Hermawan
            </h2>
            <p className="text-sm text-gray-400 text-center px-4 transition-all duration-300">
              Backend Developer | DevOps Enthusiast
            </p>
          </>
        )}

        {/* Navigation */}
        <nav className="mt-8 flex flex-col gap-2 w-full px-3">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link key={i} href={item.href}>
                <div
                  className={`group relative flex items-center py-2 px-3 rounded-md text-sm font-medium transition-all duration-300
        ${
          isActive
            ? "bg-gray-800 text-white scale-[1.03]"
            : "text-gray-300 hover:bg-gray-800 hover:scale-105"
        }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!isCollapsed && <span className="ml-3">{item.name}</span>}

                  {/* Tooltip */}
                  {isCollapsed && (
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 z-50 shadow-lg">
                      {item.name}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {!isCollapsed && (
          <footer className="mt-auto pb-4 text-xs text-gray-500 text-center px-2">
            &copy; {new Date().getFullYear()} Mochamad Dimas Putra Hermawan.
          </footer>
        )}
      </aside>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white flex justify-around items-center p-2 shadow-md md:hidden z-50">
        {navItems.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <Link key={i} href={item.href}>
              <div
                className={`flex flex-col items-center text-xs transition-all duration-300 ${
                  isActive
                    ? "text-green-400 scale-105"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <div className="text-lg">{item.icon}</div>
                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
