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
  title: "Web technologies research",
};

export default function WebTechnologiesResearch() {
  const currentProduct = products.find(
    (product) => product.slug === "web-technologies-research"
  );

  const Content = () => {
    return (
      <div className="space-y-16 xl:space-y-32">
        <ContentSection title="TBA">
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            tenetur excepturi quam. Nulla minus quaerat facere perspiciatis
            numquam ratione eligendi ipsa aliquid cum officia possimus quas iste
            nam, suscipit quisquam. Dolorum facere quaerat explicabo, cupiditate
            eligendi eveniet, nostrum, quisquam voluptatum eos ipsam ducimus
            cumque eaque nulla voluptatibus! Ea, vitae soluta?
          </P>
          <Button className="mt-4">
            <a
              href="/files/individual-project/research/web-technologies-research.pdf"
              target="_blank"
            >
              Link to document
            </a>
          </Button>
        </ContentSection>
        {/* <Image
          src="/logo/banner.png"
          alt="lorem"
          className="rounded-lg border shadow-sm"
          width={1920}
          height={1080}
        /> */}
      </div>
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
