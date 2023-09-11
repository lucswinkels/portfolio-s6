import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const domain = "https://dev-portfolio-s6.vercel.app"

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio S6",
    default: "Portfolio S6",
  },
  description: "My portfolio for semester 6 of advanced media design at FHICT.",
  openGraph: {
    title: "Portfolio S6",
    description:
      "My portfolio for semester 6 of advanced media design at FHICT.",
    url: domain,
    siteName: "Portfolio S6",
    images: [
      {
        url: `${domain}/img/logo/banner.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: `${domain}/favicon.ico`,
    shortcut: `${domain}/img/logo/png/ls-logo-black.png`,
    apple: `${domain}/apple-touch-icon.png`,
  },
  manifest: `${domain}/manifest.json`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="py-[10vh] xl:py-[15vh]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
