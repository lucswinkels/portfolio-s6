import { Metadata } from "next";
import Image from "next/image";

import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import ContentSection from "@/components/content-section";
import ProductDetails from "@/components/product-details";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Portfolio content research",
};

export default function PortfolioContentResearch() {
  const currentProduct = products.find(
    (product) => product.slug === "portfolio-content-research"
  );

  const Content = () => {
    return (
      <>
        <ContentSection title="Lorem Ipsum">
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            tenetur excepturi quam. Nulla minus quaerat facere perspiciatis
            numquam ratione eligendi ipsa aliquid cum officia possimus quas iste
            nam, suscipit quisquam. Dolorum facere quaerat explicabo, cupiditate
            eligendi eveniet, nostrum, quisquam voluptatum eos ipsam ducimus
            cumque eaque nulla voluptatibus! Ea, vitae soluta?
          </P>
          <Image
            src="/logo/banner.png"
            alt="lorem"
            className="rounded-lg border shadow-sm mt-8 lg:mt-16 xl:mt-32"
            width={1920}
            height={1080}
          />
        </ContentSection>
        <ContentSection title="Lorem Ipsum">
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            tenetur excepturi quam. Nulla minus quaerat facere perspiciatis
            numquam ratione eligendi ipsa aliquid cum officia possimus quas iste
            nam, suscipit quisquam. Dolorum facere quaerat explicabo, cupiditate
            eligendi eveniet, nostrum, quisquam voluptatum eos ipsam ducimus
            cumque eaque nulla voluptatibus! Ea, vitae soluta?
          </P>
        </ContentSection>
      </>
    );
  };

  return (
    <Container>
      <FadeUp>
        {currentProduct && <ProductDetails product={currentProduct} />}
        <Content />
      </FadeUp>
    </Container>
  );
}
