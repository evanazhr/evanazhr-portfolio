import Image from "next/image";
import FadeInSection from "@/components/animation/FadeInSection";
import TerminalShell from "@/components/terminal-shell";
import Contact from "@/components/contact";
import { Code, CodeXml } from "lucide-react";

export default function Home() {
  return (
    <TerminalShell path="" contentClassName="flex flex-col justify-center">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row-reverse md:gap-12">
          <div className="relative flex items-center justify-center md:w-5/12">
            <Image
              src="/assets/image/avatar.png"
              alt="Evan Azhar Hartana Portrait"
              width={400}
              height={400}
              quality={100}
              priority
              className="border-card dark:shadow-foreground/20 aspect-square size-44 rounded-full border-4 object-cover shadow-xl transition-transform duration-500 ease-out hover:scale-105 md:size-72"
            />
            <Code className="text-primary animate-float absolute -top-4 -left-3 size-10 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)] md:-top-5 md:-left-5 md:size-14" />
            <CodeXml className="text-primary animate-float-delayed absolute -right-3 -bottom-4 size-10 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)] md:-right-5 md:-bottom-5 md:size-14" />
          </div>
          <div className="flex flex-col items-center gap-3 text-center md:w-7/12 md:items-start md:justify-center md:text-left">
            <p className="text-muted-foreground font-mono text-base font-medium tracking-tight md:text-xl">
              <span className="text-primary">$</span> whoami
            </p>
            <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl">
              Evan Azhar Hartana
            </h1>
            <p className="text-primary/95 max-w-md text-base font-semibold md:text-lg">
              Mahasiswa Sistem Komputer · Aspiring Fullstack Web Developer
            </p>
            <p className="text-muted-foreground max-w-md text-sm">
              Pandeglang, Banten, Indonesia · Terbuka untuk magang dan
              kesempatan junior developer
            </p>
            <div className="mt-4 text-3xl">
              <Contact withName={false} />
            </div>
          </div>
        </div>
      </FadeInSection>
    </TerminalShell>
  );
}
