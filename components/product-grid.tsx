"use client";

import * as React from "react";

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

export function ProductGrid({ className }: { className?: string }) {
  const [selectedProject, setSelectedProject] = React.useState("all-projects");
  return (
    <>
      <Select value={selectedProject} onValueChange={setSelectedProject}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Projects" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all-projects">All Projects</SelectItem>
            <SelectItem value="individual-project">
              Individual Project
            </SelectItem>
            <SelectItem value="group-project">Group Project</SelectItem>
            <SelectItem value="international-project">
              International Project
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div
        className={cn(
          "grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-6",
          className
        )}
      >
        {selectedProject === "all-projects"
          ? products.map((product, i) => (
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
          : products
              .filter((product) => product.project.slug === selectedProject)
              .map((product, i) => (
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
              ))}
      </div>
    </>
  );
}
