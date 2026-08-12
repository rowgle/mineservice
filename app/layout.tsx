import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title:
    "Mine Service Inc. | General contracting. Specializing in civil construction works.",
  description:
    "Mine Service Inc. is a heavy civil and industrial contractor serving Texas since 1985. Mining, landfills, oil & gas, concrete, and site development — built with experience, strength, safety, and results.",
  keywords: [
    "mining",
    "landfills",
    "sitework",
    "oil",
    "gas",
    "mechanical",
    "quarries",
    "aggregates",
    "concrete",
  ],
  icons: {
    icon: [{ url: "/msi-favicon-01.png", type: "image/png" }],
    apple: "/msi-favicon-01.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffcc40",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ClickSpark
          sparkColor="#ffcc40"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}