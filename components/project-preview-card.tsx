"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const builder = imageUrlBuilder(client);
export function ProjectPreviewCard({ ...props }) {
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
              src={builder.image(props.image).width(1920).height(1080).url()}
              className="border-b rounded-t-lg"
              width={1920}
              height={1080}
              alt={props.image.alt}
            />
          </CardHeader>
          <CardContent className="relative pt-1.5">
            <CardTitle className="mb-2">{props.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {props.description}
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
