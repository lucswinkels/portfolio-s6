"use client"

import Container from "./container"
import { Logo } from "./logo"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
  return (
    <Container>
      <div className="w-full items-center justify-between flex py-8 xl:py-12">
        <Logo />
        <ModeToggle />
      </div>
    </Container>
  )
}
