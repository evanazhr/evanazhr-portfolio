import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/lib/theme-provider";
import "@/assets/style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Evan Azhar Hartana – Developer Portfolio",
    template: "%s | Evan Azhar Hartana",
  },
  description:
    "Portofolio Evan Azhar Hartana. Seorang pengembang web yang sedang belajar membangun website dengan HTML, CSS, JavaScript, Vue, React, dan Next.js.",
  keywords: [
    "Evan Azhar Hartana",
    "web developer",
    "frontend",
    "portfolio",
    "React",
    "Next.js",
    "Vue",
    "Indonesia developer",
  ],
  authors: [{ name: "Evan Azhar Hartana" }],
  creator: "Evan Azhar Hartana",
  openGraph: {
    title: "Evan Azhar Hartana – Developer Portfolio",
    description:
      "Saya sedang membangun fondasi kuat dalam pengembangan web. Lihat proyek-proyek dan teknologi yang saya pelajari.",
    url: "https://evanazhr.vercel.app", 
    siteName: "Evan Azhar Hartana",
    images: [
      {
        url: "/assets/image/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Evan Azhar Hartana",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <header className="fixed bottom-0 md:bottom-auto  md:top-0 bg-background/50 z-50 md:backdrop-blur-lg left-0 w-full z-50  ">
            <Navbar />
          </header>
          <main className="pt-20">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
