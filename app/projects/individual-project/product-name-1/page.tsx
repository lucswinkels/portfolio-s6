import { Metadata } from "next";
import Image from "next/image";

import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import ProductDetails from "@/components/product-details";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Product Name 1",
};

export default function ProductNameOne() {
  const currentProject = projects.find(
    (project) => project.slug === "individual-project"
  );

  const currentProduct = currentProject?.products?.find(
    (product) => product.slug === "product-name-1"
  );

  const ProductContent = () => {
    return (
      <>
        <FadeUp>
          <P className="mt-8 lg:mt-16 xl:mt-32">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            tenetur excepturi quam. Nulla minus quaerat facere perspiciatis
            numquam ratione eligendi ipsa aliquid cum officia possimus quas iste
            nam, suscipit quisquam. Dolorum facere quaerat explicabo, cupiditate
            eligendi eveniet, nostrum, quisquam voluptatum eos ipsam ducimus
            cumque eaque nulla voluptatibus! Ea, vitae soluta?
          </P>
        </FadeUp>
        <FadeUp>
          <div className="mt-8 lg:mt-16 xl:mt-32 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Image
              src="/logo/banner.png"
              alt="lorem"
              className="rounded-lg border shadow-sm"
              width={1920}
              height={1080}
            />
            <div>
              <P className="[&:not(:first-child)]:mt-0 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci tenetur excepturi quam. Nulla minus quaerat facere
                perspiciatis numquam ratione eligendi ipsa aliquid cum officia
                possimus quas iste nam, suscipit quisquam. Dolorum facere
                quaerat explicabo, cupiditate eligendi eveniet, nostrum,
                quisquam voluptatum eos ipsam ducimus cumque eaque nulla
                voluptatibus! Ea, vitae soluta?
              </P>
              <Button>
                <a href="/" target="_blank">
                  View PDF file
                </a>
              </Button>
            </div>
          </div>
        </FadeUp>
        <FadeUp>
          <P className="mt-8 lg:mt-16 xl:mt-32">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            tenetur excepturi quam. Nulla minus quaerat facere perspiciatis
            numquam ratione eligendi ipsa aliquid cum officia possimus quas iste
            nam, suscipit quisquam. Dolorum facere quaerat explicabo, cupiditate
            eligendi eveniet, nostrum, quisquam voluptatum eos ipsam ducimus
            cumque eaque nulla voluptatibus! Ea, vitae soluta?
          </P>
        </FadeUp>
      </>
    );
  };

  return (
    <Container>
      <FadeUp>
        {currentProduct && <ProductDetails product={currentProduct} />}
        <ProductContent />
      </FadeUp>
    </Container>
  );
}
