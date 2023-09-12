import { Metadata } from "next";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { H2 } from "@/components/typography/h2";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Learning Outcomes",
};

export default function LearningOutcomes() {
  return (
    <Container>
      <FadeUp>
        <H2>Learning Outcomes</H2>
        <P>Coming soon.</P>
      </FadeUp>
    </Container>
  );
}
