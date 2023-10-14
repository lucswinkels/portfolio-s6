"use client";

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import Container from "./container";
import { H1 } from "./typography/h1";
import { P } from "./typography/p";
import { Badge } from "./ui/badge";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <Container>
      <Badge variant="outline">{post.project}</Badge>
      <H1>{post.title}</H1>
      <P>{post.description}</P>
      {post.categories.map((category: any) => (
        <Badge variant="outline">{category}</Badge>
      ))}
      {post.researchMethods.map((method: any) => (
        <Badge variant="outline">{method.title}</Badge>
      ))}
      <Image
        src={builder.image(post.mainImage).width(1920).height(1080).url()}
        className="rounded-lg"
        width={1920}
        height={1080}
        alt={post.mainImage.alt}
        priority
      />
      <div className="prose prose-lg dark:prose-invert">
        <PortableText value={post.body} />
      </div>
    </Container>
  );
}
