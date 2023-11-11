"use client";

import { cn } from "@/lib/utils";

export function Blockquote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote className={cn("border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}
