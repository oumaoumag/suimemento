import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SuiProvider } from "@/lib/sui-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SuiMemento - Web3 Event Badges",
  description: "Revolutionizing event engagement with verifiable NFT badges on Sui blockchain",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SuiProvider>
          {children}
        </SuiProvider>
      </body>
    </html>
  )
}
