"use client";

import * as React from "react";
import { SanityDocument } from "@sanity/client";
import { AnimatePresence } from "framer-motion";

import { learningOutcomes } from "@/lib/learningOutcomes";
import { cn } from "@/lib/utils";

import { PostPreviewCard } from "./post-preview-card";
import { P } from "./typography/p";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Posts({
  posts = [],
  className,
}: {
  posts: SanityDocument[];
  className?: string;
}) {
  const [selectedLearningOutcome, setSelectedLearningOutcome] = React.useState(
    "all-learning-outcomes"
  );

  const filteredPosts = posts.filter((post) => {
    return (
      selectedLearningOutcome === "all-learning-outcomes" ||
      post.learningOutcomes.some(
        (outcome: any) => outcome.slug.current === selectedLearningOutcome
      )
    );
  });

  console.log(posts);
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <Select
          value={selectedLearningOutcome}
          onValueChange={setSelectedLearningOutcome}
        >
          <SelectTrigger className="min-w-[200px] w-max">
            <SelectValue placeholder="All Learning Outcomes" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-learning-outcomes">
                All learning outcomes
              </SelectItem>
              {learningOutcomes.map((learningOutcome, i) => (
                <SelectItem key={i} value={learningOutcome.slug}>
                  {learningOutcome.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div
        className={cn(
          "grid 2xl:grid-cols-3 md:grid-cols-2 gap-8 mt-8",
          className
        )}
      >
        <AnimatePresence>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostPreviewCard
                key={post._id}
                title={post.title}
                slug={post.slug.current}
                image={post.mainImage}
                description={post.description}
                categories={post.categories}
                href={post.slug.current}
              />
            ))
          ) : (
            <P className="transition-all">No posts found.</P>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
