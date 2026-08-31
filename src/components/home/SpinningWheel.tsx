"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  ShieldCheck,
  Zap,
  Globe,
  Activity,
  Layers,
} from "lucide-react";

export default function SpinningWheel() {
  const wheelSectors = [
    { icon: Cpu, label: "AI Core" },
    { icon: Database, label: "Database" },
    { icon: ShieldCheck, label: "Security" },
    { icon: Zap, label: "Execution" },
    { icon: Globe, label: "Deployment" },
    { icon: Activity, label: "Telemetry" },
  ];

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center mx-auto select-none">
      {/* Outer Continuous Rotating Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full flex items-center justify-center"
      >
        {wheelSectors.map((sector, index) => {
          const Icon = sector.icon;
          const angle = (index * 360) / wheelSectors.length;

          return (
            <div
              key={index}
              className="absolute w-full h-full flex items-start justify-center"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div className="mt-4 p-2.5 rounded-xl bg-purple-500/15 dark:bg-purple-900/40 border border-purple-500/30 text-purple-700 dark:text-purple-200 shadow-lg backdrop-blur-md">
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
          );
        })}

        {/* Decorative Circular Dashed Track */}
        <div
          className="absolute inset-4 rounded-full border border-dashed border-purple-500/30 animate-spin"
          style={{ animationDuration: "40s" }}
        />
      </motion.div>

      {/* Center Fixed Glowing Core Logo/Icon */}
      <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-linear-to-br from-purple-600 via-purple-700 to-indigo-800 p-1 shadow-[0_0_35px_rgba(168,85,247,0.4)] flex items-center justify-center border-2 border-purple-300/40">
        <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 backdrop-blur-xl flex flex-col items-center justify-center text-slate-900 dark:text-white space-y-1">
          <Layers className="w-7 h-7 text-purple-600 dark:text-purple-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-300">
            FormCraft
          </span>
        </div>
      </div>
    </div>
  );
}
