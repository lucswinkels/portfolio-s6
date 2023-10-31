"use client";

import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { H2 } from "./typography/h2";
import { H3 } from "./typography/h3";
import { H4 } from "./typography/h4";
import { P } from "./typography/p";
import { Card, CardContent } from "./ui/card";

export default function NextPreviousPost({
  currentPost,
}: {
  currentPost: SanityDocument;
}) {
  console.log(currentPost);

  return (
    <Card className="mt-16 xl:mt-32">
      <div className="flex justify-between items-center">
        <Link
          href=""
          className="align-end text-end w-full p-8 hover:bg-accent border-r transition-colors"
        >
          <div className="flex flex-col gap-2">
            <P>Previous</P>
            <H3>Portfolio UI Design</H3>
          </div>
        </Link>
        <Link
          href=""
          className="align-start w-full p-8 hover:bg-accent transition-colors"
        >
          <div className="flex flex-col gap-2">
            <P>Next</P>
            <H3>Portfolio UI Design</H3>
          </div>
        </Link>
      </div>
    </Card>
  );
}
