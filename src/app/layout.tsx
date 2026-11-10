import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeProvider from "@/lib/theme-provider";
import "@/assets/style/globals.css";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserratHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evanazhr.vercel.app"),
  verification: {
    google: "qRP_Wzl_Uuw0RswTGhSKSUKmG_HhFJhLA7HVjWhYWKU",
  },
  title: {
    default: "Evan Azhar Hartana – Developer Portfolio",
    template: "%s | Evan Azhar Hartana",
  },
  description:
    "Portofolio Evan Azhar Hartana, mahasiswa Sistem Komputer Universitas Pamulang yang tertarik pada pengembangan web full stack.",
  keywords: [
    "Evan Azhar Hartana",
    "web developer",
    "frontend",
    "portfolio",
    "React",
    "Next.js",
    "Express.js",
    "Universitas Pamulang",
    "Vue",
    "Indonesia developer",
  ],
  authors: [{ name: "Evan Azhar Hartana" }],
  creator: "Evan Azhar Hartana",
  openGraph: {
    title: "Evan Azhar Hartana – Developer Portfolio",
    description:
      "Mahasiswa Sistem Komputer yang membangun proyek web full stack dan terbuka untuk kesempatan magang.",
    url: "https://evanazhr.vercel.app",
    siteName: "Evan Azhar Hartana",
    images: [
      {
        url: "/assets/image/avatar.png",
        width: 1254,
        height: 1254,
        alt: "Evan Azhar Hartana",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan Azhar Hartana – Developer Portfolio",
    description:
      "Mahasiswa Sistem Komputer yang membangun proyek web full stack dan terbuka untuk kesempatan magang.",
    images: ["/assets/image/avatar.png"],
    creator: "@evanazhr",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Evan Azhar Hartana",
    url: "https://evanazhr.vercel.app",
    image: "https://evanazhr.vercel.app/assets/image/avatar.png",
    jobTitle: "Aspiring Fullstack Web Developer",
    sameAs: [
      "https://github.com/evanazhr",
      "https://www.linkedin.com/in/evan-azhar-hartana/",
      "https://www.instagram.com/evanazh/",
    ],
  };

  return (
    <html
      suppressHydrationWarning
      lang="id"
      className={cn(
        "scroll-smooth",
        geistSans.variable,
        geistMono.variable,
        montserratHeading.variable,
      )}
    >
      <body className="bg-background text-foreground relative min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
