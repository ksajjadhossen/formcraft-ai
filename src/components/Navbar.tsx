"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          FormCraft AI
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          {isLoaded && isSignedIn && (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                Dashboard
              </Link>
              <Link
                href="/create-form"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                + Create
              </Link>
            </>
          )}

          <ModeToggle />

          {isLoaded && isSignedIn && <UserButton />}

          {isLoaded && !isSignedIn && (
            <>
              <Link
                href="/sign-in"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
