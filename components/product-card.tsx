// @ts-nocheck
// ts-nocheck for badge variants ts2322 error
"use client";

import Image from "next/image";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import { Product } from "@/lib/types/Product";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProductCardBackground } from "./product-card-background";
import { Badge } from "./ui/badge";

export function ProductCard({ ...props }: Product) {
  return (
    <Link href={props.href} className="group">
      <motion.div
        key={props.slug}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <Card
          {...props}
          className="group-hover:-translate-y-2 transition-transform"
        >
          <CardHeader>
            <ProductCardBackground variant={props.categories[0]}>
              <Image src={props.img} alt={props.title} width={80} height={80} />
            </ProductCardBackground>
          </CardHeader>
          <CardContent className="relative pt-1.5">
            <div className="absolute -top-9 z-10 left-6 flex gap-2 mb-6 flex-wrap">
              {/* <Badge>{props.project.title}</Badge> */}
              {props.categories.map((category, i) => (
                <Badge key={i} variant="card" className="capitalize">
                  {category}
                </Badge>
              ))}
            </div>
            <CardTitle className="mb-2">{props.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {props.description}
            </CardDescription>
          </CardContent>
          {/* <CardFooter>
          <Link href={props.href}>
            <Button>
              View product
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter> */}
        </Card>
      </motion.div>
    </Link>
  );
}
