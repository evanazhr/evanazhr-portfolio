import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/animation/FadeInSection";
import TerminalShell from "@/components/terminal-shell";
import Contact from "@/components/contact";

const quickCommands = [
  { label: "cat about.txt", href: "/about" },
  { label: "ls tech-stack/", href: "/tech" },
  { label: "ls projects/", href: "/projects" },
];

export default function Home() {
  return (
    <TerminalShell
      path=""
      title="bash"
      label="Halaman utama"
      contentClassName="flex flex-col justify-center-safe"
    >
      <FadeInSection>
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="flex flex-col gap-6 md:col-span-7">
            <p className="text-muted-foreground font-mono text-xs">
              <span className="text-primary">evan@portfolio</span>
              <span aria-hidden="true">:</span>
              <span className="text-primary">~</span>
              <span aria-hidden="true">$</span> whoami
            </p>

            <div>
              <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Evan Azhar
                <span className="block">Hartana</span>
              </h1>
              <p className="text-foreground/85 mt-4 max-w-[42ch] text-base leading-7">
                Mahasiswa Sistem Komputer yang membangun antarmuka dan layanan
                web full stack.
              </p>
            </div>

            <dl className="grid grid-cols-[6rem_1fr] gap-x-4 gap-y-2 font-mono text-xs sm:text-[13px]">
              <dt className="text-muted-foreground">role</dt>
              <dd>Aspiring Fullstack Web Developer</dd>
              <dt className="text-muted-foreground">focus</dt>
              <dd>React + Express.js + PostgreSQL</dd>
              <dt className="text-muted-foreground">location</dt>
              <dd>Pandeglang, Banten, Indonesia</dd>
              <dt className="text-muted-foreground">status</dt>
              <dd className="text-success flex items-center gap-2">
                <span
                  className="bg-success size-1.5 rounded-full"
                  aria-hidden="true"
                />
                open to internship &amp; junior roles
              </dd>
            </dl>

            <nav aria-label="Perintah cepat">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
                {quickCommands.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground group inline-flex items-baseline gap-1.5 transition-colors"
                    >
                      <span className="text-primary" aria-hidden="true">
                        $
                      </span>
                      <span className="underline-offset-4 group-hover:underline">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-border border-t pt-5">
              <Contact withName={false} />
            </div>
          </div>

          <div className="md:col-span-5">
            <figure className="relative mx-auto w-full max-w-[17rem] md:max-w-none">
              <div className="border-border bg-muted/20 relative aspect-square overflow-hidden rounded-sm border">
                <Image
                  src="/assets/image/avatar.png"
                  alt="Foto Evan Azhar Hartana"
                  width={400}
                  height={400}
                  sizes="(min-width: 768px) 380px, 272px"
                  priority
                  className="size-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="border-primary pointer-events-none absolute -top-px -left-px size-5 border-t-2 border-l-2"
                />
                <span
                  aria-hidden="true"
                  className="border-primary pointer-events-none absolute -right-px -bottom-px size-5 border-r-2 border-b-2"
                />
              </div>
              <figcaption className="text-muted-foreground mt-2 flex items-center justify-between font-mono text-[11px]">
                <span>avatar.png</span>
                <span>1254×1254</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </FadeInSection>
    </TerminalShell>
  );
}
