"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

export function Logo() {
  const { theme } = useTheme()
  let src

  switch (theme) {
    case "light":
      src = "/logo/png/logo-ls-black.png"
      break
    case "dark":
      src = "/logo/png/logo-ls-white.png"
      break
    default:
      src = `/logo/png/logo-ls-black.png`
      break
  }

  return (
    <Link href="/">
      <Image src={src} alt="LS Logo" width={32} height={32} priority />
    </Link>
  )
}
