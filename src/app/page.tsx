import Image from "next/image";
import FadeInSection from "@/components/animation/FadeInSection";
import SquareBackground from "@/components/square-background";

import TechIcons from "@/components/tech-icons";
import Contact from "@/components/contact";
import Project from "@/components/project";
import { certifications, journeyItems, skillGroups } from "@/data/profile";

import { Code, CodeXml } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col gap-12 overflow-hidden pb-20 md:gap-24">
      {/* Dynamic Glow and Grid Background */}
      <div className="grid-background" />
      <div className="glow-nebula" />
      <div className="glow-nebula-secondary" />

      <FadeInSection>
        <section
          id="home"
          className="flex min-h-[90vh] w-full items-center justify-center pt-16 pb-10 md:pt-20"
        >
          <div className="mx-auto max-w-5xl px-4 md:px-8">
            <div className="border-border/50 bg-background/50 overflow-hidden rounded-lg border shadow-lg backdrop-blur-sm dark:shadow-foreground/10">
              <div className="border-border/50 text-muted-foreground flex items-center gap-2 border-b px-4 py-3 font-mono text-xs">
                <span className="text-primary" aria-hidden="true">
                  ●
                </span>
                evan@portfolio:~
                <span className="ml-auto">bash</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-10 p-6 md:flex-row-reverse md:gap-12 md:p-10">
                <div className="relative flex items-center justify-center md:w-5/12">
                  <Image
                    src="/assets/image/avatar.png"
                    alt="Evan Azhar Hartana Portrait"
                    width={400}
                    height={400}
                    quality={100}
                    priority
                    className="border-card aspect-square size-60 rounded-full border-4 object-cover shadow-xl transition-transform duration-500 ease-out hover:scale-105 md:size-80 dark:shadow-foreground/20"
                  />
                  <Code className="text-primary animate-float absolute -top-5 -left-4 size-12 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)] md:-top-6 md:-left-6 md:size-16" />
                  <CodeXml className="text-primary animate-float-delayed absolute -right-4 -bottom-5 size-12 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)] md:-right-6 md:-bottom-6 md:size-16" />
                </div>
                <div className="flex flex-col items-center gap-3 text-center md:w-7/12 md:items-start md:justify-center md:text-left">
                  <p className="text-muted-foreground font-mono text-lg font-medium tracking-tight md:text-2xl">
                    <span className="text-primary">$</span> whoami
                  </p>
                  <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-6xl">
                    Evan Azhar Hartana
                  </h1>
                  <p className="text-primary/95 max-w-md text-base font-semibold md:text-xl">
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
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* About section */}
      <FadeInSection>
        <section id="about" className="w-full">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="bg-card/30 border-border/40 rounded-lg border p-6 shadow-sm backdrop-blur-sm md:p-10 dark:shadow-foreground/10">
              <h2 className="text-3xl leading-[1.25] font-bold">
                <span className="text-primary font-mono">$</span> cat about.txt
              </h2>
              <p className="text-muted-foreground mt-4 text-justify text-base leading-[1.6]">
                Saya Evan, mahasiswa Sistem Komputer di Universitas Pamulang.
                Latar sistem komputer membuat saya tertarik pada hubungan antara
                hardware dan software, termasuk dampaknya pada performa aplikasi.
              </p>
              <p className="text-muted-foreground mt-4 text-justify text-base leading-[1.6]">
                Saya senang membangun antarmuka modern, fitur server-side, dan
                aplikasi yang terhubung dengan database. Saya terus mengembangkan
                kemampuan full stack melalui proyek pribadi dan kolaborasi.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Tech Stack */}
      <FadeInSection>
        <section id="tech" className="w-full">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <Card className="bg-card/30 border-border/40 rounded-lg shadow-sm backdrop-blur-sm dark:shadow-foreground/10">
              <CardHeader className="pt-8 md:px-8">
                <h2 className="flex items-center gap-2 text-3xl font-bold">
                  <span className="text-primary font-mono">$</span> ls
                  tech-stack/ <Code className="text-primary size-8" />
                </h2>
                <p className="text-muted-foreground mt-2 text-base">
                  Teknologi yang saya pelajari dan gunakan
                </p>
              </CardHeader>
              <CardContent className="pb-8 md:px-8">
                <TechIcons />
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {skillGroups.map((group) => (
                    <div
                      key={group.title}
                      className="border-border/40 bg-background/40 rounded-lg border p-5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold">{group.title}</h3>
                        <span className="text-muted-foreground font-mono text-xs">
                          [{group.level}]
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-3 text-sm leading-6">
                        {group.skills.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="font-mono text-sm font-semibold">
                    <span className="text-primary">$</span> ls ./certifications
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {certifications.map((certification) => (
                      <li
                        key={certification}
                        className="border-border/40 bg-background/40 text-muted-foreground rounded-md border px-3 py-2 text-xs"
                      >
                        {certification}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeInSection>

      {/* Journey */}
      <FadeInSection>
        <section id="journey" className="w-full">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="border-border/40 bg-card/30 rounded-lg border p-6 shadow-sm backdrop-blur-sm dark:shadow-foreground/10 md:p-10">
              <h2 className="text-3xl font-bold">
                <span className="text-primary font-mono">$</span> tail -n 3
                ./journey.log
              </h2>
              <ol className="border-border/40 mt-8 space-y-6 border-l pl-5">
                {journeyItems.map((item) => (
                  <li key={item.title} className="relative">
                    <span
                      aria-hidden="true"
                      className="bg-primary absolute top-1.5 -left-[1.63rem] size-2.5 rounded-full"
                    />
                    <p className="text-muted-foreground font-mono text-xs uppercase">
                      {item.date}
                    </p>
                    <h3 className="mt-1 font-semibold">
                      {item.title}
                      {item.organization && (
                        <span className="text-muted-foreground font-normal">
                          {" "}
                          @ {item.organization}
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-6">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <section id="project" className="w-full py-10">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="flex flex-col gap-6 text-base">
              <h2 className="text-3xl font-bold">
                <span className="text-primary font-mono">$</span> ls projects/
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-muted-foreground">
                  Beberapa Project yang pernah saya buat
                </p>
                <Project />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
