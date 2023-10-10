"use client";

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import Container from "./container";
import { H1 } from "./typography/h1";
import { P } from "./typography/p";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <Container className="prose prose-lg">
      <H1>{post.title}</H1>
      <P>{post.description}</P>
      {post?.mainImage ? (
        <Image
          className=""
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt}
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} /> : null}
    </Container>
  );
}
