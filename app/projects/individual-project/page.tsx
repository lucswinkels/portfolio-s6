import { Metadata } from "next";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { H2 } from "@/components/typography/h2";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Individual Project",
};

export default function IndividualProject() {
  return (
    <Container>
      <FadeUp>
        <H2>Individual Project</H2>
        <P>Coming soon.</P>
      </FadeUp>
    </Container>
  );
}
