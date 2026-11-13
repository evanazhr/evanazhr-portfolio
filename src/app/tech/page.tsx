import type { Metadata } from "next";
import FadeInSection from "@/components/animation/FadeInSection";
import TerminalShell from "@/components/terminal-shell";
import TerminalHeading from "@/components/terminal-heading";
import TechIcons from "@/components/tech-icons";
import { certifications, journeyItems, skillGroups } from "@/data/profile";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech & Journey",
  description:
    "Teknologi, tools, sertifikasi, dan perjalanan belajar Evan Azhar Hartana di bidang pengembangan web full stack.",
};

const sectionClass = "border-border mt-10 border-t pt-8";

export default function TechPage() {
  return (
    <TerminalShell path="tech" label="Tech stack dan perjalanan">
      <FadeInSection>
        <TerminalHeading
          command="ls tech-stack/"
          description="Teknologi yang saya pelajari dan gunakan, beserta perjalanan dan bukti belajarnya."
        />

        <TechIcons />

        <section aria-label="Kelompok kemampuan" className={sectionClass}>
          <TerminalHeading
            as="h2"
            size="section"
            command="cat skills.txt"
            className="mb-4"
          />
          <ul className="border-border border-t">
            {skillGroups.map((group) => (
              <li
                key={group.title}
                className="border-border grid gap-1 border-b py-4 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <p className="text-muted-foreground text-sm leading-6">
                  {group.skills.join(", ")}
                </p>
                <span className="text-muted-foreground font-mono text-[11px]">
                  {group.level}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Perjalanan belajar" className={sectionClass}>
          <TerminalHeading
            as="h2"
            size="section"
            command="cat journey.log"
            className="mb-4"
          />
          <ol className="border-border ml-1 border-l">
            {journeyItems.map((item) => (
              <li key={item.title} className="relative pb-6 pl-6 last:pb-0">
                <span
                  aria-hidden="true"
                  className="bg-primary absolute top-1.5 -left-[4.5px] size-2 rounded-full"
                />
                <p className="text-muted-foreground font-mono text-[11px]">
                  {item.date}
                </p>
                <h3 className="mt-1 text-[15px] font-semibold">
                  {item.title}
                  {item.organization && (
                    <span className="text-muted-foreground font-normal">
                      {" "}
                      @ {item.organization}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground mt-1.5 max-w-[64ch] text-sm leading-6">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-label="Sertifikasi" className={sectionClass}>
          <TerminalHeading
            as="h2"
            size="section"
            command="ls ./certifications"
            className="mb-4"
          />
          <ul className="border-border border-t">
            {certifications.map((certification) => (
              <li
                key={certification}
                className="border-border flex items-start gap-3 border-b py-2.5 last:border-b-0"
              >
                <Check
                  className="text-success mt-0.5 size-3.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground text-sm">
                  {certification}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </FadeInSection>
    </TerminalShell>
  );
}
