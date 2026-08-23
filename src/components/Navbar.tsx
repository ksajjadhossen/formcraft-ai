"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
  const { isSignedIn, isLoaded } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-purple-600 dark:text-purple-400 tracking-tight"
        >
          FormCraft AI
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className={`text-xs font-medium transition-colors ${
              pathname === "/dashboard"
                ? "text-purple-600 dark:text-purple-400 font-semibold"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/create-form"
            className={`text-xs font-medium transition-colors ${
              pathname === "/create-form"
                ? "text-purple-600 dark:text-purple-400 font-semibold"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            + Create
          </Link>

          {/* Magic UI Animated Theme Toggler */}
          <AnimatedThemeToggler />

          {isLoaded && (
            <>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <SignInButton mode="modal">
                  <button className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-md transition font-medium">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
