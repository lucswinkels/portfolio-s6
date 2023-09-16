// @ts-nocheck
// ts nocheck for badge variants ts2322 error
"use client";

import Image from "next/image";

import { Product } from "@/lib/types/Product";

import { H1 } from "./typography/h1";
import { H4 } from "./typography/h4";
import { MutedText } from "./typography/muted-text";
import { P } from "./typography/p";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <>
      <div className="grid 2xl:grid-cols-3 gap-8 2xl:gap-2 mb-8 xl:mb-16">
        <div className="2xl:col-span-2 w-full">
          {/* <MutedText className="mb-4">{product.project.title}</MutedText> */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {product.categories.map((category, i) => (
              <Badge key={i} variant={category} className="capitalize">
                {category}
              </Badge>
            ))}
          </div>
          <H1>{product.title}</H1>
          <P>{product.description}</P>
        </div>
        {product.data && (
          <Card className="flex flex-col gap-8 p-0 shadow-none md:shadow-sm border-0 md:border md:p-6 lg:p-8 md:w-max 2xl:ml-auto w-full h-max">
            {product.data.learningOutcomes && (
              <div>
                <H4>Learning Outcomes</H4>
                <div className="flex flex-col gap-2 mt-2 flex-wrap">
                  {product.data.learningOutcomes.map((learningOutcome, i) => (
                    <Badge key={i} variant="secondary" className="w-max">
                      {learningOutcome.title}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {product.data.researchMethods && (
              <div>
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
          </Card>
        )}
      </div>
      <Image
        src={product.img}
        alt={product.title}
        className="rounded-lg border shadow-sm"
        width={1920}
        height={1080}
        priority
      />
    </>
  );
}
