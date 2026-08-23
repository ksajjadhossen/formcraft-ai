"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

import { SiGithub, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 text-slate-400 text-xs py-4 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} FormCraft AI. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-slate-200 transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-slate-200 transition">
            Terms
          </Link>
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <SiGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <SiX className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
