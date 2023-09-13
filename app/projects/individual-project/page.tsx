import { Metadata } from "next";

import { projects } from "@/lib/projects";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { H2 } from "@/components/typography/h2";

export const metadata: Metadata = {
  title: "Individual Project",
};

export default function IndividualProject() {
  const currentProject = projects.find(
    (project) => project.slug === "individual-project"
  );

  return (
    <Container>
      <FadeUp>
        <H2>Individual Project</H2>
        <div className="mt-6 grid xl:grid-cols-3 md:grid-cols-2 gap-8">
          {currentProject?.products?.map((product, i) => (
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
        </div>
      </FadeUp>
    </Container>
  );
}
