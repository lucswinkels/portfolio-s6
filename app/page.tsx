import { Metadata } from "next"

import Container from "@/components/container"
import { ProjectCard } from "@/components/project-card"
import { H1 } from "@/components/typography/h1"

export const metadata: Metadata = {
  title: "Home // Portfolio S6",
}

const projects = [
  {
    slug: "individual-project",
    title: "Individual Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: "/logo/banner.png",
  },
  {
    slug: "group-project",
    title: "Group Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: "/logo/banner.png",
  },
  {
    slug: "international-project",
    title: "International Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: "/logo/banner.png",
  },
]

export default function Home() {
  return (
    <Container>
      <H1>Portfolio</H1>
      <div className="mt-8 grid xl:grid-cols-3 md:grid-cols-2 gap-8">
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
    </Container>
  )
}
