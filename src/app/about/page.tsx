import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/animation/FadeInSection";
import TerminalShell from "@/components/terminal-shell";
import TerminalHeading from "@/components/terminal-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tentang Evan Azhar Hartana, mahasiswa Sistem Komputer Universitas Pamulang yang tertarik pada pengembangan web full stack.",
};

const facts = [
  { key: "status", value: "open to internship & junior roles", live: true },
  { key: "focus", value: "fullstack web development" },
  { key: "education", value: "Sistem Komputer, Universitas Pamulang" },
  { key: "location", value: "Pandeglang, Banten, Indonesia" },
];

export default function AboutPage() {
  return (
    <TerminalShell path="about" label="Tentang Evan">
      <FadeInSection>
        <TerminalHeading
          command="cat about.txt"
          description="Ringkasan singkat tentang siapa saya dan apa yang sedang saya kerjakan."
        />

        <div className="text-muted-foreground mt-8 max-w-[68ch] space-y-4 text-[15px] leading-7">
          <p>
            Saya Evan, mahasiswa Sistem Komputer di Universitas Pamulang. Latar
            sistem komputer membuat saya tertarik pada hubungan antara hardware
            dan software, termasuk dampaknya pada performa aplikasi.
          </p>
          <p>
            Saya senang membangun antarmuka modern, fitur server-side, dan
            aplikasi yang terhubung dengan database. Saya terus mengembangkan
            kemampuan full stack melalui proyek pribadi dan kolaborasi.
          </p>
        </div>

        <dl className="border-border mt-10 max-w-[68ch] border-t">
          {facts.map((fact) => (
            <div
              key={fact.key}
              className="border-border flex flex-col gap-1 border-b py-3 font-mono text-xs sm:flex-row sm:gap-6"
            >
              <dt className="text-muted-foreground sm:w-24 sm:shrink-0">
                {fact.key}
              </dt>
              <dd className="flex items-center gap-2">
                {fact.live && (
                  <span
                    className="bg-success size-1.5 rounded-full"
                    aria-hidden="true"
                  />
                )}
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <nav
          aria-label="Lanjut ke halaman lain"
          className="border-border mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t pt-4 font-mono text-xs"
        >
          <Link
            href="/tech"
            className="text-muted-foreground hover:text-primary inline-flex items-baseline gap-1.5 transition-colors"
          >
            <span className="text-primary" aria-hidden="true">
              $
            </span>
            <span className="underline-offset-4 hover:underline">
              ls tech-stack/
            </span>
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-primary inline-flex items-baseline gap-1.5 transition-colors"
          >
            <span className="text-primary" aria-hidden="true">
              $
            </span>
            <span className="underline-offset-4 hover:underline">
              ls projects/
            </span>
          </Link>
        </nav>
      </FadeInSection>
    </TerminalShell>
  );
}
