"use client";

import Link from "next/link";
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-purple-600 dark:text-purple-400 tracking-tight"
        >
          FormCraft AI
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/dashboard"
            className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/create-form"
            className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            + Create
          </Link>

          <AnimatedThemeToggler />

          {isLoaded && (
            <>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <SignInButton mode="modal">
                  <button className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-3.5 py-1.5 rounded-md transition font-medium">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
