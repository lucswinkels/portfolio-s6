import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const productCardBackgroundVariants = cva(
  "w-full flex items-center justify-center h-48 bg-gradient-to-br rounded-t-lg border-b",
  {
    variants: {
      variant: {
        default: "from-zinc-500 to-zinc-800",
        research: "from-blue-500 to-blue-800",
        design: "from-rose-500 to-rose-800",
        development: "from-indigo-500 to-indigo-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export interface ProductCardBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof productCardBackgroundVariants> {}

function ProductCardBackground({
  className,
  variant,
  ...props
}: ProductCardBackgroundProps) {
  return (
    <div
      className={cn(productCardBackgroundVariants({ variant }), className)}
      {...props}
    />
  );
}

export { ProductCardBackground, productCardBackgroundVariants };
