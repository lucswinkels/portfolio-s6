import * as React from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import Posts from "@/components/posts";
import PreviewPosts from "@/components/preview-posts";
import PreviewProvider from "@/components/preview-provider";
import { H1 } from "@/components/typography/h1";
import { Lead } from "@/components/typography/lead";

export const metadata: Metadata = {
  title: "Burden of proof",
};

export default async function BurdenOfProof() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });
  const isDraftMode = draftMode().isEnabled;

  const Content = () => (
    <div className="mb-8 xl:mb-16">
      <H1 className="mb-4">Burden of proof</H1>
      <Lead>A collection of everything I did during the semester.</Lead>
    </div>
  );

  if (isDraftMode && token) {
    return (
      <Container>
        <FadeUp>
          <Content />
          <PreviewProvider token={token}>
            <PreviewPosts posts={posts} />
          </PreviewProvider>
        </FadeUp>
      </Container>
    );
  }
  return (
    <Container>
      <FadeUp>
        <Content />
        <Posts posts={posts} />
      </FadeUp>
    </Container>
  );
}
