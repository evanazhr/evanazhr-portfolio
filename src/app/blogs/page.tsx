import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/animation/FadeInSection";
import TerminalShell from "@/components/terminal-shell";
import TerminalHeading from "@/components/terminal-heading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Catatan dan tutorial seputar web development dari Evan Azhar Hartana.",
};

const posts = [
  {
    title: "Mengenal HTML: struktur dasar halaman web",
    description:
      "Mulai belajar HTML dari kerangka dokumen, elemen, hingga membuat halaman Hello World sederhana.",
    date: "2026-11-08",
    category: "Tutorial",
    href: "/blogs/tutorial-html",
  },
];

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function Blog() {
  return (
    <TerminalShell path="blogs" label="Daftar tulisan">
      <FadeInSection>
        <TerminalHeading
          command="ls blog/"
          description="Tempat saya berbagi hal yang sedang dipelajari seputar web development, dari catatan kecil sampai tutorial praktis."
          className="mb-8"
        />

        <section aria-label="Daftar tulisan">
          <ul className="border-border border-t">
            {posts.map((post) => (
              <li key={post.href}>
                <Link
                  href={post.href}
                  className="group border-border block border-b py-6 transition-colors"
                >
                  <div className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px]">
                    <time dateTime={post.date}>
                      {dateFormatter.format(new Date(`${post.date}T00:00:00`))}
                    </time>
                    <span
                      className="text-muted-foreground/40"
                      aria-hidden="true"
                    >
                      /
                    </span>
                    <span className="text-primary">{post.category}</span>
                  </div>
                  <h2 className="group-hover:text-primary mt-2 text-xl font-semibold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mt-2 max-w-[62ch] text-sm leading-6">
                    {post.description}
                  </p>
                  <span className="text-muted-foreground group-hover:text-primary mt-3 inline-block font-mono text-[11px] transition-colors">
                    baca tulisan
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </FadeInSection>
    </TerminalShell>
  );
}
