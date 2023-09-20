import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import BackToTop from "@/components/back-to-top";

const inter = Inter({ subsets: ["latin"] });

const domain = "https://semester6.lucswinkels.com";

export const metadata: Metadata = {
  title: {
    template: "%s // Portfolio S6",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script id="show-banner">
          {`(function (m, a, z, e) {
  var s, t;
  try {
    t = m.sessionStorage.getItem("maze-us");
  } catch (err) {}

  if (!t) {
    t = new Date().getTime();
    try {
      m.sessionStorage.setItem("maze-us", t);
    } catch (err) {}
  }

  s = a.createElement("script");
  s.src = z + "?t=" + t + "&apiKey=" + e;
  s.async = true;
  a.getElementsByTagName("head")[0].appendChild(s);
  m.mazeUniversalSnippetApiKey = e;
})(
  window,
  document,
  "https://snippet.maze.co/maze-universal-loader.js",
  "6dfc8cb8-2589-4dfa-8a76-fd9522f99cc5"
);
`}
        </Script>
        <ThemeProvider attribute="class" enableSystem>
          <Navbar />
          <div className="py-[20vh] xl:py-[25vh]">{children}</div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
