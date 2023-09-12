import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ProjectCardProps = {
  slug: string
  title: string
  img: string
  description: string
  className?: string
}

export function ProjectCard({ className, ...props }: ProjectCardProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={props.slug}>
          <Image
            src={props.img}
            alt={props.title}
            className="rounded-lg border shadow-sm"
            width={1920}
            height={1080}
          />
        </Link>
      </CardContent>
      <CardFooter>
        <Link href={props.slug}>
          <Button variant="outline">
            View project
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
