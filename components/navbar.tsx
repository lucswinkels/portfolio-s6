"use client"

import Container from "./container"
import { Logo } from "./logo"

export function Navbar() {
  return (
    <Container>
      <div className="w-full items-center justify-between flex py-8 xl:py-12">
        <Logo />
        blabla
      </div>
    </Container>
  )
}
