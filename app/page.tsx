import { Metadata } from "next"

import Container from "@/components/container"
import { ProjectCard } from "@/components/project-card"
import { H1 } from "@/components/typography/h1"
import { H2 } from "@/components/typography/h2"
import { H3 } from "@/components/typography/h3"
import { H4 } from "@/components/typography/h4"
import { Lead } from "@/components/typography/lead"
import { P } from "@/components/typography/p"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <Container>
      <H1>Portfolio</H1>
      <H2>Portfolio</H2>
      <H3>Portfolio</H3>
      <H4>Portfolio</H4>
      <Lead>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, alias!
      </Lead>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, alias!</P>
      <ProjectCard />
    </Container>
  )
}
