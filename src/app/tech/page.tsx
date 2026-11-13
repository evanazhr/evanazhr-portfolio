import type { Metadata } from "next";
import FadeInSection from "@/components/animation/FadeInSection";
import TerminalShell from "@/components/terminal-shell";
import TechIcons from "@/components/tech-icons";
import { certifications, journeyItems, skillGroups } from "@/data/profile";
import { Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech & Journey",
  description:
    "Teknologi, tools, sertifikasi, dan perjalanan belajar Evan Azhar Hartana di bidang pengembangan web full stack.",
};

export default function TechPage() {
  return (
    <TerminalShell path="tech">
      <FadeInSection>
        <h2 className="flex items-center gap-2 text-2xl font-bold md:text-3xl">
          <span className="text-primary font-mono">$</span> ls tech-stack/
          <Code className="text-primary size-7" />
        </h2>
        <p className="text-muted-foreground mt-2 text-base">
          Teknologi yang saya pelajari dan gunakan
        </p>
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

        <div className="border-border/40 mt-10 border-t pt-8">
          <h3 className="text-xl font-bold md:text-2xl">
            <span className="text-primary font-mono">$</span> cat journey.log
          </h3>
          <ol className="border-border/40 mt-6 space-y-6 border-l pl-5">
            {journeyItems.map((item) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden="true"
                  className="bg-primary absolute top-1.5 -left-[1.63rem] size-2.5 rounded-full"
                />
                <p className="text-muted-foreground font-mono text-xs uppercase">
                  {item.date}
                </p>
                <h4 className="mt-1 font-semibold">
                  {item.title}
                  {item.organization && (
                    <span className="text-muted-foreground font-normal">
                      {" "}
                      @ {item.organization}
                    </span>
                  )}
                </h4>
                <p className="text-muted-foreground mt-2 text-sm leading-6">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-border/40 mt-10 border-t pt-8">
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
      </FadeInSection>
    </TerminalShell>
  );
}
