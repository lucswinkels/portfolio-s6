import * as React from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { projectsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import PreviewProjects from "@/components/preview-projects";
import PreviewProvider from "@/components/preview-provider";
import Projects from "@/components/projects";
import { H1 } from "@/components/typography/h1";
import { Lead } from "@/components/typography/lead";

export const metadata: Metadata = {
  title: "Home // Portfolio S6",
};

export default async function Home() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: projectsQuery,
  });
  const isDraftMode = draftMode().isEnabled;
  const Content = () => (
    <div className="mb-8 xl:mb-16">
      <H1 className="mb-4">Projects</H1>
      <Lead>All the projects I worked on during this semester.</Lead>
    </div>
  );
  if (isDraftMode && token) {
    return (
      <Container>
        <FadeUp>
          <Content />
          <PreviewProvider token={token}>
            <PreviewProjects projects={projects} />
          </PreviewProvider>
        </FadeUp>
      </Container>
    );
  }
  return (
    <Container>
      <FadeUp>
        <Content />
        <Projects projects={projects} />
      </FadeUp>
    </Container>
  );
}
