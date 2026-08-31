"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
  className?: string;
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
}

export function ShineBorder({
  className,
  borderRadius = 12,
  borderWidth = 1,
  duration = 14,
  shineColor = "#000000",
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-(--border-radius) [p:border_width_var(--border-width)]",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent, transparent, ${Array.isArray(shineColor) ? shineColor.join(",") : shineColor}, transparent, transparent)`,
          } as React.CSSProperties
        }
        className={`absolute inset-0 rounded-(--border-radius) [border:var(--border-width)_solid_transparent] [mask-clip:padding-box,border-box]! mask-intersect! [mask:var(--mask-linear-gradient)] before:absolute before:inset-0 before:aspect-square before:w-full before:animate-shine before:bg-(--background-radial-gradient) before:opacity-100`}
      />
    </div>
  );
}
