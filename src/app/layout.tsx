import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"

import "cal-sans";

export const metadata: Metadata = {
  title: "Tangerine - An in-memory vector database",
  description: "Tangerine is an in-memory vector database. A drop in replacement for fast retrieval of text vectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={""}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
