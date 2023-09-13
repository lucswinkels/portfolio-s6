"use client";

import { cn } from "@/lib/utils";

export function ProjectGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid xl:grid-cols-3 md:grid-cols-2 gap-8", className)}>
      {children}
    </div>
  );
}
