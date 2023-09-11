"use client"

import Link from "next/link"

import Container from "./container"
import { Logo } from "./logo"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
  return (
    <Container>
      <div className="w-full items-center justify-between flex py-8 xl:py-12">
        <Logo />
        <div className="flex gap-4 xl:gap-8 items-center">
          <Link href="/about">About</Link>
          <ModeToggle />
        </div>
      </div>
    </Container>
  )
}
