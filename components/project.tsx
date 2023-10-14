"use client";

import * as React from "react";
import { draftMode } from "next/headers";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import PreviewProjects from "@/components/preview-projects";
import PreviewProvider from "@/components/preview-provider";
import { H1 } from "@/components/typography/h1";

import Posts from "./posts";

export default async function Project({
  project,
}: {
  project: SanityDocument;
}) {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <Container>
        <FadeUp>
          <H1>{project.title}</H1>
          <div className="mt-6 xl:mt-12">
            <PreviewProvider token={token}>
              <PreviewProjects projects={posts} />
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
        <div className="mt-6 xl:mt-12">
          <Posts posts={posts} />
        </div>
      </FadeUp>
    </Container>
  );
}
