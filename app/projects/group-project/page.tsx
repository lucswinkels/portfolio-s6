import { Metadata } from "next";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { H2 } from "@/components/typography/h2";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Group Project",
};

export default function GroupProject() {
  return (
    <Container>
      <FadeUp>
        <H2>Group Project</H2>
        <P>Coming soon.</P>
      </FadeUp>
    </Container>
  );
}
