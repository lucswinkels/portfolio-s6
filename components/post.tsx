"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ChevronRight } from "lucide-react";

import { slugify } from "@/lib/utils";

import FadeUp from "./animation/fade-up";
import Container from "./container";
import { H1 } from "./typography/h1";
import { P } from "./typography/p";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <FadeUp>
      <Container>
        <div className="md:flex hidden items-center mb-4">
          <Button variant="link" className="p-0">
            <Link href="/">Home</Link>
          </Button>
          <ChevronRight className="mx-1 h-4 w-4" />
          <Button variant="link" className="p-0">
            <Link href={`/projects/${slugify(post.project)}`}>
              {post.project}
            </Link>
          </Button>
          <ChevronRight className="mx-1 h-4 w-4" />
          <Button variant="link" disabled className="p-0">
            <Link href="/">{post.title}</Link>
          </Button>
        </div>
        <H1>{post.title}</H1>
        <P>{post.description}</P>
        {post.categories || post.researchMethods ? (
          <div className="flex gap-4 flex-wrap my-8">
            {post.categories &&
              post.categories.map((category: any) => (
                <Badge variant="outline" key={category}>
                  {category}
                </Badge>
              ))}
            {post.researchMethods &&
              post.researchMethods.map((method: any) => (
                <Badge variant="outline" key={method}>
                  {method.title}
                </Badge>
              ))}
          </div>
        ) : null}
        <Image
          src={builder.image(post.mainImage).width(1920).height(1080).url()}
          className="rounded-lg mb-16 border"
          width={1920}
          height={1080}
          alt={post.mainImage.alt}
          priority
        />
        <div className="prose dark:prose-invert">
          <PortableText value={post.body} />
        </div>
      </Container>
    </FadeUp>
  );
}
