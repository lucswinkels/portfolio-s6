import { Metadata } from "next";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { H1 } from "@/components/typography/h1";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Learning Outcomes",
};

export default function LearningOutcomes() {
  return (
    <Container>
      <FadeUp>
        <H1>Learning Outcomes</H1>
        <P>Coming soon.</P>
      </FadeUp>
    </Container>
  );
}
