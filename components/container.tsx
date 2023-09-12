"use client";

import { cn } from "@/lib/utils";

import FadeUp from "./animation/fade-up";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FadeUp>
      <div
        className={cn(
          "w-full px-8 md:px-[10%] xl:px-[15%] 2xl:px-[20%]",
          className
        )}
      >
        {children}
      </div>
    </FadeUp>
  );
}
