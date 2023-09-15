"use client";

import { cn } from "@/lib/utils";

import FadeUp from "./animation/fade-up";
import { H2 } from "./typography/h2";

export default function ContentSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FadeUp>
      <div className={cn("mt-8 lg:mt-16 xl:mt-32", className)}>
        <H2>{title}</H2>
        {children}
      </div>
    </FadeUp>
  );
}
