// @ts-nocheck
// ts-nocheck for badge variants ts2322 error
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import { Product } from "@/lib/types/Product";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
            <Image
              src={props.img}
              alt={props.title}
              className="border-b rounded-t-lg"
              width={1920}
              height={1080}
            />
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-6 flex-wrap">
              {/* <Badge>{props.project.title}</Badge> */}
              {props.categories.map((category, i) => (
                <Badge key={i} variant={category} className="capitalize">
                  {category}
                </Badge>
              ))}
            </div>
            <CardTitle className="mb-1">{props.title}</CardTitle>
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
