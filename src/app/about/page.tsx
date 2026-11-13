import type { Metadata } from "next";
import FadeInSection from "@/components/animation/FadeInSection";
import TerminalShell from "@/components/terminal-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tentang Evan Azhar Hartana, mahasiswa Sistem Komputer Universitas Pamulang yang tertarik pada pengembangan web full stack.",
};

export default function AboutPage() {
  return (
    <TerminalShell path="about">
      <FadeInSection>
        <h2 className="text-2xl font-bold md:text-3xl">
          <span className="text-primary font-mono">$</span> cat about.txt
        </h2>
        <p className="text-muted-foreground mt-4 text-justify text-base leading-[1.7]">
          Saya Evan, mahasiswa Sistem Komputer di Universitas Pamulang. Latar
          sistem komputer membuat saya tertarik pada hubungan antara hardware
          dan software, termasuk dampaknya pada performa aplikasi.
        </p>
        <p className="text-muted-foreground mt-4 text-justify text-base leading-[1.7]">
          Saya senang membangun antarmuka modern, fitur server-side, dan
          aplikasi yang terhubung dengan database. Saya terus mengembangkan
          kemampuan full stack melalui proyek pribadi dan kolaborasi.
        </p>
        <div className="border-border/40 bg-background/40 mt-8 rounded-lg border p-5 font-mono text-sm">
          <p className="text-muted-foreground">
            <span className="text-primary">status</span>
            <span className="mx-2">=</span>
            open to internship &amp; junior roles
          </p>
          <p className="text-muted-foreground mt-2">
            <span className="text-primary">focus</span>
            <span className="mx-2">=</span>
            fullstack web development
          </p>
          <p className="text-muted-foreground mt-2">
            <span className="text-primary">location</span>
            <span className="mx-2">=</span>
            Pandeglang, Banten, Indonesia
          </p>
        </div>
      </FadeInSection>
    </TerminalShell>
  );
}
