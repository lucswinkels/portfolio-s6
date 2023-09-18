// @ts-nocheck
// ts nocheck for badge variants ts2322 error
"use client";

import Image from "next/image";

import { Product } from "@/lib/types/Product";

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
          <Badge key={i} variant={category} className="capitalize">
            {category}
          </Badge>
        ))}
      </div>
      <H1>{product.title}</H1>
      <P>{product.description}</P>
      <Image
        src={product.img}
        alt={product.title}
        className="rounded-lg border shadow-sm my-16"
        width={1920}
        height={1080}
        priority
      />
      {product.data && (
        <Card className="flex flex-col gap-8 p-0 shadow-none md:shadow-sm border-0 md:border md:p-6 lg:p-8 w-full">
          {product.data.learningOutcomes && (
            <div>
              <H4>Learning Outcomes</H4>
              <div className="flex gap-2 mt-2 flex-wrap w-max">
                {product.data.learningOutcomes.map((learningOutcome, i) => (
                  <Badge key={i} variant="secondary">
                    {learningOutcome.title}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {product.data.researchMethods && (
            <div>
              <H4>Research Methods</H4>
              <div className="flex gap-2 mt-2 flex-wrap w-max">
                {product.data.researchMethods.map((researchMethod, i) => (
                  <Badge key={i} variant={researchMethod.category}>
                    {researchMethod.method}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
