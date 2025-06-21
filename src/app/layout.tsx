import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/lib/theme-provider";
import "@/assets/style/globals.css";


export const metadata: Metadata = {
  verification: {
    google: "qRP_Wzl_Uuw0RswTGhSKSUKmG_HhFJhLA7HVjWhYWKU",
  },
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
        className={`antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Navbar />
          <main>
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
