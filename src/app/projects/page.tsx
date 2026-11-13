import type { Metadata } from "next";
import FadeInSection from "@/components/animation/FadeInSection";
import TerminalShell from "@/components/terminal-shell";
import Project from "@/components/project";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Kumpulan proyek web dan mobile yang pernah dikerjakan Evan Azhar Hartana.",
};

export default function ProjectsPage() {
  return (
    <TerminalShell path="projects">
      <FadeInSection>
        <div className="flex flex-col gap-6 text-base">
          <h2 className="text-2xl font-bold md:text-3xl">
            <span className="text-primary font-mono">$</span> ls projects/
          </h2>
          <p className="text-muted-foreground">
            Beberapa project yang pernah saya buat
          </p>
          <Project />
        </div>
      </FadeInSection>
    </TerminalShell>
  );
}
