"use client";

import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { Card, CardContent } from "./ui/card";

export default function NextPreviousPost({
  currentPost,
}: {
  currentPost: SanityDocument;
}) {
  console.log(currentPost);
  return (
    <Card className="">
      <CardContent className="flex justify-between items-center">
        <Link href="" className="align-end bg-blue-500 w-full">
          Previous
        </Link>
        <Link href="" className="align-start bg-red-500 w-full">
          Next
        </Link>
      </CardContent>
    </Card>
  );
}
