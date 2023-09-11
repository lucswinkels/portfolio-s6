import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import Container from "@/components/container"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <Container>
      <Button>Button</Button>
    </Container>
  )
}
