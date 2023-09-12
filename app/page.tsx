import { Metadata } from "next";

import { projects } from "@/lib/projects";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { H1 } from "@/components/typography/h1";
import { H2 } from "@/components/typography/h2";

export const metadata: Metadata = {
  title: "Home // Portfolio S6",
};

export default function Home() {
  return (
    <Container>
      <FadeUp>
        <H2>Portfolio</H2>
        <div className="mt-6 grid xl:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              slug={project.slug}
              img={project.img}
              description={project.description}
            />
          ))}
        </div>
      </FadeUp>
    </Container>
  );
}
