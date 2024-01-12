import "@styles/app.css"

import type { Metadata } from "next"
import { font } from "@assets/fonts"
import { JotaiProvider } from "@components/providers/jotai-provider"
import { QueryProvider } from "@components/providers/QueryProvider"
import { ThemeProvider } from "@components/providers/theme-provider"
import { siteConfig } from "@config/site"
import { EdgeStoreProvider } from "@lib/edgestore"
import { cn } from "@lib/utils"
import { Toaster } from "@ui/sonner"

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="theme-color" href="#14B8A6" />
      </head>
      <body
        className={cn("min-h-screen bg-background antialiased", font.className)}
        suppressHydrationWarning
      >
        <EdgeStoreProvider>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              enableColorScheme
              disableTransitionOnChange
            >
              <JotaiProvider>
                <section className="container mx-auto p-2">{children}</section>
              </JotaiProvider>
            </ThemeProvider>
          </QueryProvider>
        </EdgeStoreProvider>
        <Toaster />
      </body>
    </html>
  )
}
