import * as React from "react";
import { Metadata } from "next";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import Posts from "@/components/posts";
import { ProductGrid } from "@/components/product-grid";
import { H1 } from "@/components/typography/h1";

export const metadata: Metadata = {
  title: "Home // Portfolio S6",
};

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <Container>
      <FadeUp>
        <H1>Portfolio</H1>
        <div className="mt-6 xl:mt-12">
          {/* <ProductGrid /> */}
          <Posts posts={posts} />
        </div>
      </FadeUp>
    </Container>
  );
}
