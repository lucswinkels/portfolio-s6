import { Metadata } from "next";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Individual project",
};

export default function IndividualProject() {
  const Content = () => {
    return (
      <>
        <FadeUp>
          <P>Reading guide coming soon.</P>
        </FadeUp>
      </>
    );
  };

  return (
    <Container>
      <FadeUp>
        <Content />
      </FadeUp>
    </Container>
  );
}