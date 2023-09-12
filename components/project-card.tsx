import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function ProjectCard({ className, ...props }: CardProps) {
  return (
    <Link href="/">
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>Project Name</CardTitle>
          <CardDescription>Lorem ipsum dolor sit.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/logo/banner.png"
            alt="test"
            width={500}
            height={500}
            className="rounded-md"
          />
        </CardContent>
      </Card>
    </Link>
  )
}
