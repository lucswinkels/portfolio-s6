import { Metadata } from "next";

import { projects } from "@/lib/projects";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { ProjectGrid } from "@/components/project-grid";
import { H2 } from "@/components/typography/h2";
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
        <H2>International Project</H2>
        {currentProject && currentProject.products ? (
          <ProjectGrid className="mt-6">
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
