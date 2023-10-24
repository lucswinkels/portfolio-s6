import * as React from "react";
import { draftMode } from "next/headers";
import { projectPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import PreviewProvider from "@/components/preview-provider";
import { H1 } from "@/components/typography/h1";

import Posts from "./posts";
import PreviewPosts from "./preview-posts";

export default async function Project({
  project,
}: {
  project: SanityDocument;
}) {
  const posts = await sanityFetch<SanityDocument[]>({
    query: projectPostsQuery,
    params: { project: project.slug.current },
  });
  console.log(posts);
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <Container>
        <FadeUp>
          <H1>{project.title}</H1>
          <div className="mt-8">
            <PreviewProvider token={token}>
              <PreviewPosts posts={posts} />
            </PreviewProvider>
          </div>
        </FadeUp>
      </Container>
    );
  }
  return (
    <Container>
      <FadeUp>
        <H1>{project.title}</H1>
        <div className="mt-8">
          <Posts posts={posts} />
        </div>
      </FadeUp>
    </Container>
  );
}
