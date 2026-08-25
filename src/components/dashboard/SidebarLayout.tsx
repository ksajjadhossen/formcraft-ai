"use client";

import { Settings, LayoutDashboard, FileText, PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLayout() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "All Forms", href: "/forms", icon: FileText },
    { name: "Create Form", href: "/create-form", icon: PlusCircle },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 backdrop-blur-xl p-6 hidden md:flex flex-col justify-between shrink-0 min-h-screen">
      <div className="space-y-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 px-2">
          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            FormCraft AI
          </span>
        </div>

        {/* Nav Links */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-purple-600/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 shadow-sm"
                    : "hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isActive ? "text-purple-600 dark:text-purple-400" : ""}`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <Link
          href="/settings"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
            pathname === "/settings"
              ? "bg-purple-600/10 border border-purple-500/20 text-purple-600 dark:text-purple-300"
              : "hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
          }`}
        >
          <Settings className="w-4 h-4" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
