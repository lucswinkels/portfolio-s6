"use client";

import { cn } from "@/lib/utils";

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl lg:text-4xl 2xl:text-5xl font-extrabold tracking-tight transition-colors",
        className
      )}
    >
      {children}
    </h2>
  );
}
