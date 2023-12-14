import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FadeUp from "@/components/animation/fade-up";
import BurdenOfProof from "@/components/burden-of-proof";
import Container from "@/components/container";
import { A } from "@/components/typography/a";
import { H1 } from "@/components/typography/h1";
import { H2 } from "@/components/typography/h2";
import { H3 } from "@/components/typography/h3";
import { Lead } from "@/components/typography/lead";
import { List } from "@/components/typography/list";
import { P } from "@/components/typography/p";
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
      <div className="prose dark:prose-invert max-w-full">
        <H2>Table of contents</H2>
        <List>
          <li>
            <Link href="#assignments">Assignments</Link>
            <List>
              <li>
                <Link href="#assignment--individual-project">
                  Individual project
                </Link>
              </li>
              <li>
                <Link href="#assignment--group-project">Group project</Link>
              </li>
              <li>
                <Link href="#assignment--international-project">
                  International project
                </Link>
              </li>
            </List>
          </li>
          <li>
            <Link href="#process-and-results">Process & results</Link>
            <List>
              <li>
                <Link href="#process--individual-project">
                  Individual project
                </Link>
              </li>
              <li>
                <Link href="#process--group-project">Group project</Link>
              </li>
              <li>
                <Link href="#process--international-project">
                  International project
                </Link>
              </li>
            </List>
          </li>
          <li>
            <Link href="#burden-of-proof">Burden of proof</Link>
          </li>
        </List>
        <div id="assignments">
          <H2>The assignments</H2>
        </div>
        <div id="assignment--individual-project">
          <H3>Individual project</H3>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa adipisci, hic accusantium, officiis et explicabo,
            laborum nihil eaque cumque repudiandae error! Neque temporibus
            voluptatum nam, dicta aperiam magnam iste. Quam totam iure mollitia,
            dolores iste quidem modi blanditiis! Unde temporibus quos ea
            quaerat, molestias dicta tempora earum. Illum, architecto.
          </P>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa adipisci, hic accusantium, officiis et explicabo,
            laborum nihil eaque cumque repudiandae error! Neque temporibus
            voluptatum nam, dicta aperiam magnam iste. Quam totam iure mollitia,
            dolores iste quidem modi blanditiis! Unde temporibus quos ea
            quaerat, molestias dicta tempora earum. Illum, architecto.
          </P>
        </div>
        <div id="assignment--group-project">
          <H3>Group project</H3>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa adipisci, hic accusantium, officiis et explicabo,
            laborum nihil eaque cumque repudiandae error! Neque temporibus
            voluptatum nam, dicta aperiam magnam iste. Quam totam iure mollitia,
            dolores iste quidem modi blanditiis! Unde temporibus quos ea
            quaerat, molestias dicta tempora earum. Illum, architecto.
          </P>
        </div>
        <div id="assignment--international-project">
          <H3>International project</H3>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa adipisci, hic accusantium, officiis et explicabo,
            laborum nihil eaque cumque repudiandae error! Neque temporibus
            voluptatum nam, dicta aperiam magnam iste. Quam totam iure mollitia,
            dolores iste quidem modi blanditiis! Unde temporibus quos ea
            quaerat, molestias dicta tempora earum. Illum, architecto.
          </P>
        </div>
        <div id="process-and-results">
          <H2>Process and results</H2>
        </div>
        <div id="process--individual-project">
          <H3>Individual project</H3>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa adipisci, hic accusantium, officiis et explicabo,
            laborum nihil eaque cumque repudiandae error! Neque temporibus
            voluptatum nam, dicta aperiam magnam iste. Quam totam iure mollitia,
            dolores iste quidem modi blanditiis! Unde temporibus quos ea
            quaerat, molestias dicta tempora earum. Illum, architecto.
          </P>
        </div>
        <div id="process--group-project">
          <H3>Group project</H3>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa adipisci, hic accusantium, officiis et explicabo,
            laborum nihil eaque cumque repudiandae error! Neque temporibus
            voluptatum nam, dicta aperiam magnam iste. Quam totam iure mollitia,
            dolores iste quidem modi blanditiis! Unde temporibus quos ea
            quaerat, molestias dicta tempora earum. Illum, architecto.
          </P>
        </div>
        <div id="process--international-project">
          <H3>International project</H3>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa adipisci, hic accusantium, officiis et explicabo,
            laborum nihil eaque cumque repudiandae error! Neque temporibus
            voluptatum nam, dicta aperiam magnam iste. Quam totam iure mollitia,
            dolores iste quidem modi blanditiis! Unde temporibus quos ea
            quaerat, molestias dicta tempora earum. Illum, architecto.
          </P>
        </div>
        <div id="burden-of-proof">
          <H2>Burden of proof</H2>
          <div className="mt-4 xl:mt-8 not-prose">
            <BurdenOfProof />
          </div>
        </div>
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
