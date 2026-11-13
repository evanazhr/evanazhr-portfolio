import type { Metadata, Viewport } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeProvider from "@/lib/theme-provider";
import "@/assets/style/globals.css";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
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
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080b09",
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
      className={cn(archivo.variable, plexMono.variable)}
    >
      <body className="bg-background text-foreground relative min-h-svh antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="bg-background text-foreground border-border sr-only z-50 rounded-sm border px-3 py-2 font-mono text-xs focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          >
            Lewati ke konten
          </a>
          <div className="site-grid" />
          <Navbar />
          <main id="main" tabIndex={-1} className="min-h-svh">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
