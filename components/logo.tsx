"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

export function Logo() {
  const { theme } = useTheme()
  return (
    <Link href="/">
      <Image
        src={`${
          theme === "dark"
            ? "/logo/png/logo-ls-white.png"
            : "/logo/png/logo-ls-black.png"
        }`}
        alt="Logo"
        width={36}
        height={36}
        priority
      />
    </Link>
  )
}
