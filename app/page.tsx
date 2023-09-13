import * as React from "react";
import { Metadata } from "next";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { ProductGrid } from "@/components/product-grid";
import { H1 } from "@/components/typography/h1";

export const metadata: Metadata = {
  title: "Home // Portfolio S6",
};

export default function Home() {
  return (
    <Container>
      <FadeUp>
        <H1>Portfolio</H1>
        <div className="mt-6 xl:mt-12">
          <ProductGrid />
        </div>
      </FadeUp>
    </Container>
  );
}
