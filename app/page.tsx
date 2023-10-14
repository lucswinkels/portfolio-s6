import * as React from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { postsQuery, postsRefQuery, projectsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import Posts from "@/components/posts-grid";
import PreviewPosts from "@/components/preview-posts";
import PreviewProvider from "@/components/preview-provider";
import { H1 } from "@/components/typography/h1";

export const metadata: Metadata = {
  title: "Home // Portfolio S6",
};

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsRefQuery });
  const projects = await sanityFetch<SanityDocument[]>({
    query: projectsQuery,
  });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }
  return (
    <Container>
      <FadeUp>
        <H1>Portfolio</H1>
        <div className="mt-6 xl:mt-12">
          <Posts posts={posts} />
        </div>
      </FadeUp>
    </Container>
  );
}
