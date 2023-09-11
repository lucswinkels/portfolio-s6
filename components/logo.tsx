"use client"

import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo/png/logo-ls-black.png"
        alt="Logo"
        width={40}
        height={40}
        priority
      />
    </Link>
  )
}
