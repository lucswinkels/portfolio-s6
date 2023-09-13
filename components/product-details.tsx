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
    <>
      <div className="grid xl:grid-cols-3 gap-8 xl:gap-2 mb-8 xl:mb-12">
        <div className="xl:col-span-2 w-full">
          <H1>{product.title}</H1>
          <div className="flex gap-2 mt-2 lg:mt-6">
            {product.categories.map((category, i) => (
              <Badge key={i} variant="secondary" className="capitalize">
                {category}
              </Badge>
            ))}
          </div>
          <P>{product.description}</P>
        </div>
        {product.data && (
          <Card className="flex flex-col gap-8 p-8 md:w-max xl:ml-auto w-full">
            {product.data.learningOutcomes && (
              <div>
                <H4>Learning Outcomes</H4>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {product.data.learningOutcomes.map((learningOutcome, i) => (
                    <Badge key={i} variant="secondary">
                      {learningOutcome}
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
                    <Badge key={i} variant="secondary">
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
