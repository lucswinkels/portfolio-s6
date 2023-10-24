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

export const metadata: Metadata = {
  title: "Home // Portfolio S6",
};

export default async function Home() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: projectsQuery,
  });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <Container>
        <FadeUp>
          <H1>Projects</H1>
          <div className="mt-6 xl:mt-12">
            <PreviewProvider token={token}>
              <PreviewProjects projects={projects} />
            </PreviewProvider>
          </div>
        </FadeUp>
      </Container>
    );
  }
  return (
    <Container>
      <FadeUp>
        <H1>Projects</H1>
        <div className="mt-6 xl:mt-12">
          <Projects projects={projects} />
        </div>
      </FadeUp>
    </Container>
  );
}
