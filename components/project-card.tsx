import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "./ui/badge";

type ProjectCardProps = {
  slug: string;
  title: string;
  img: string;
  href: string;
  description: string;
  categories?: string[];
  className?: string;
};

export function ProjectCard({ className, ...props }: ProjectCardProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <Link href={props.href}>
          <Image
            src={props.img}
            alt={props.title}
            className="rounded-lg border shadow-sm"
            width={1920}
            height={1080}
          />
        </Link>
      </CardHeader>
      <CardContent>
        {props.categories && (
          <div className="flex gap-2 mb-6">
            {props.categories.map((category, i) => (
              <Badge key={i} variant="secondary" className="capitalize">
                {category}
              </Badge>
            ))}
          </div>
        )}
        <CardTitle className="mb-1">{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={props.href}>
          <Button variant="outline">
            View project
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
