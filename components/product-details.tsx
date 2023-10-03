// @ts-nocheck
// ts nocheck for badge variants ts2322 error
"use client";

import Image from "next/image";

import { Product } from "@/lib/types/Product";

import { ProductCardBackground } from "./product-card-background";
import { H1 } from "./typography/h1";
import { H4 } from "./typography/h4";
import { P } from "./typography/p";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="mb-16 xl:mb-32">
      <div className="flex gap-2 mb-4 flex-wrap">
        {product.categories.map((category, i) => (
          <Badge key={i} variant="outline" className="capitalize">
            {category}
          </Badge>
        ))}
      </div>
      <H1>{product.title}</H1>
      <P>{product.description}</P>
      <ProductCardBackground
        className="rounded-lg border shadow-sm my-16 h-[80vh] w-full"
        variant={product.categories[0]}
      >
        <Image src={product.img} alt={product.title} width={80} height={80} />
      </ProductCardBackground>
      {product.data && (
        <>
          {product.data.learningOutcomes && (
            <div>
              <H4>Learning Outcomes</H4>
              <div className="flex gap-2 mt-2 flex-wrap">
                {product.data.learningOutcomes.map((learningOutcome, i) => (
                  <Badge key={i} variant="secondary">
                    {learningOutcome.title}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {product.data.researchMethods && (
            <div className="mt-8">
              <H4>Research Methods</H4>
              <div className="flex gap-2 mt-2 flex-wrap">
                {product.data.researchMethods.map((researchMethod, i) => (
                  <Badge key={i} variant={researchMethod.category}>
                    {researchMethod.method}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
