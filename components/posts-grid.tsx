"use client";

import * as React from "react";
import Link from "next/link";
import { SanityDocument } from "@sanity/client";
import { AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

import { ProductCard } from "./product-card";
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
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;
  const [selectedLearningOutcome, setSelectedLearningOutcome] = React.useState(
    "all-learning-outcomes"
  );
  const learningOutcomes = [
    {
      title: "1: User interaction (analysis & advice)",
      slug: "1-user-interaction-analysis-and-advice",
    },
    {
      title: "2: User interaction (execution & validation)",
      slug: "2-user-interaction-execution-and-validation",
    },
    {
      title: "3: Software design and realisation",
      slug: "3-software-design-and-realisation",
    },
    {
      title: "4: Future-oriented organisation",
      slug: "4-future-oriented-organisation",
    },
    {
      title: "5: Investigative problem solving",
      slug: "5-investigative-problem-solving",
    },
    { title: "6: Personal leadership", slug: "6-personal-leadership" },
    {
      title: "7: Goal-oriented interaction",
      slug: "7-goal-oriented-interaction",
    },
  ];
  const filteredPosts = posts.filter((post) => {
    return (
      selectedLearningOutcome === "all-learning-outcomes" ||
      post.learningOutcomes.some(
        (outcome: any) => outcome.slug === selectedLearningOutcome
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
          {filteredPosts ? (
            filteredPosts.map((post) => (
              // <ProductCard
              //   key={post._id}
              //   title={post.title}
              //   slug={post.slug.current}
              //   imgSrc={post.mainImage}
              //   imgAlt={post.mainImage}
              //   description={post.description}
              //   categories={post.categories}
              //   href={post.slug.current}
              // />
              <p>{post.title}</p>
            ))
          ) : (
            <P className="transition-all">No posts found.</P>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
