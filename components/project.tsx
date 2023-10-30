import * as React from "react";
import { draftMode } from "next/headers";
import Link from "next/link";
import { projectPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { ExternalLink } from "lucide-react";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import PreviewProvider from "@/components/preview-provider";
import { H1 } from "@/components/typography/h1";

import Posts from "./posts";
import PreviewPosts from "./preview-posts";
import { P } from "./typography/p";
import { Button } from "./ui/button";

export default async function Project({
  project,
}: {
  project: SanityDocument;
}) {
  const posts = await sanityFetch<SanityDocument[]>({
    query: projectPostsQuery,
    params: { projectSlug: project.slug.current },
  });
  const isDraftMode = draftMode().isEnabled;

  const Content = () => (
    <div className="lg:flex justify-between mb-8 xl:mb-16">
      <div>
        <H1 className="mb-4">{project.title}</H1>
        <P>{project.description}</P>
      </div>
      <Button asChild className="mt-4 lg:mt-0">
        <a
          href={`/files/${project.slug.current}/reading-guide.pdf`}
          target="_blank"
        >
          <ExternalLink className="mr-2 h-4 w-4" /> Reading Guide
        </a>
      </Button>
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
