import { Metadata } from "next";

import { projects } from "@/lib/projects";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { ProjectGrid } from "@/components/project-grid";
import { H1 } from "@/components/typography/h1";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "International Project",
};

export default function InternationalProject() {
  const currentProject = projects.find(
    (project) => project.slug === "international-project"
  );
  return (
    <Container>
      <FadeUp>
        <H1>International Project</H1>
        {currentProject && currentProject.products ? (
          <ProjectGrid>
            {currentProject.products.map((product, i) => (
              <ProjectCard
                key={i}
                title={product.title}
                slug={product.slug}
                img={product.img}
                description={product.description}
                href={product.href}
                categories={product.categories}
              />
            ))}
          </ProjectGrid>
        ) : (
          <P>No products found for this project.</P>
        )}
      </FadeUp>
    </Container>
  );
}
