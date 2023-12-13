import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { A } from "@/components/typography/a";
import { H1 } from "@/components/typography/h1";
import { Lead } from "@/components/typography/lead";
import { SmallText } from "@/components/typography/small-text";

export const metadata: Metadata = {
  title: "Reading guide",
};

export default function ReadingGuide() {
  const Content = () => (
    <>
      <div className="md:flex hidden items-center mb-8 text-muted-foreground">
        <SmallText>
          <Link href="/">Home</Link>
        </SmallText>
        <ChevronRight className="mx-1 h-4 w-4" />
        <SmallText className="text-foreground">Reading guide</SmallText>
      </div>
      <div className="lg:flex justify-between mb-8 xl:mb-16">
        <div>
          <H1 className="mb-4">Reading guide</H1>
          <Lead>A summary of this portfolio.</Lead>
        </div>
        <Button asChild className="mt-4 lg:mt-0">
          <a href="/files/reading-guide.pdf" target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" /> PDF version
          </a>
        </Button>
      </div>
    </>
  );
  return (
    <Container>
      <FadeUp>
        <Content />
      </FadeUp>
    </Container>
  );
}
