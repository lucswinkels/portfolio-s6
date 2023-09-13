"use client";

import { cn } from "@/lib/utils";

export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 max-w-[600px]",
        className
      )}
    >
      {children}
    </p>
  );
}
