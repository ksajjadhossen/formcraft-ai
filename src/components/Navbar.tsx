"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
  const { isSignedIn, isLoaded } = useAuth();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center">
      <nav
        style={{
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "400ms",
        }}
        className={`flex items-center justify-between ${
          isScrolled
            ? "mt-3 w-[92%] md:w-[85%] max-w-7xl bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-full px-6 md:px-8 py-3 shadow-xl"
            : "w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40 px-6 md:px-12 py-4 rounded-none"
        }`}
      >
        <Link
          href="/"
          className="text-lg font-bold text-purple-600 dark:text-purple-400 tracking-tight hover:opacity-90 transition-opacity"
        >
          FormCraft AI
        </Link>

        <div className="flex items-center gap-6">
          {isLoaded && isSignedIn && (
            <>
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
            </>
          )}

          <AnimatedThemeToggler />

          {isLoaded && (
            <>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <SignInButton mode="modal">
                  <button className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-all font-medium shadow-sm">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
