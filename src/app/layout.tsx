import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Head from "next/head";
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
      <Head>
      <script defer src="https://analytics.us.umami.is/script.js" data-website-id="e6da6e38-963b-4fec-8c49-c197942ffc2c"></script>
      </Head>
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
