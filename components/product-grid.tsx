"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";

import { products } from "@/lib/products";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ProductCard } from "./product-card";
import { P } from "./typography/p";

export function ProductGrid({ className }: { className?: string }) {
  const [selectedProject, setSelectedProject] = React.useState("all-projects");
  const [selectedLearningOutcome, setSelectedLearningOutcome] = React.useState(
    "all-learning-outcomes"
  );

  const projects = [
    {
      title: "Individual project",
      slug: "individual-project",
    },
    { title: "International project", slug: "international-project" },
    {
      title: "Group project",
      slug: "group-project",
    },
  ];

  const learningOutcomes = [
    {
      title: "User interaction (analysis & advice)",
      slug: "user-interaction-analysis",
    },
    {
      title: "User interaction (execution & validation)",
      slug: "user-interaction-execution",
    },
    { title: "Software design and realisation", slug: "software-design" },
    {
      title: "Future-oriented organisation",
      slug: "future-oriented-organisation",
    },
    {
      title: "Investigative problem solving",
      slug: "investigative-problem-solving",
    },
    { title: "Personal leadership", slug: "personal-leadership" },
    { title: "Goal-oriented interaction", slug: "goal-oriented-interaction" },
  ];

  const filteredProducts = products.filter((product) => {
    return (
      (selectedProject === "all-projects" ||
        product.project.slug === selectedProject) &&
      (selectedLearningOutcome === "all-learning-outcomes" ||
        product.data.learningOutcomes.some(
          (outcome) => outcome.slug === selectedLearningOutcome
        ))
    );
  });
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <Select value={selectedProject} onValueChange={setSelectedProject}>
          <SelectTrigger className="min-w-[200px] w-max">
            <SelectValue placeholder="All projects" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-projects">All projects</SelectItem>
              {projects.map((project, i) => (
                <SelectItem key={i} value={project.slug}>
                  {project.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
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
          "grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-6",
          className
        )}
      >
        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, i) => (
              <ProductCard
                key={i}
                project={product.project}
                title={product.title}
                slug={product.slug}
                img={product.img}
                description={product.description}
                categories={product.categories}
                href={product.href}
              />
            ))
          ) : (
            <P>No products found.</P>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
