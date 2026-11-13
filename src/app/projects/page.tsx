import type { Metadata } from "next";
import FadeInSection from "@/components/animation/FadeInSection";
import TerminalShell from "@/components/terminal-shell";
import TerminalHeading from "@/components/terminal-heading";
import Project from "@/components/project";
import { projectItems } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Kumpulan proyek web dan mobile yang pernah dikerjakan Evan Azhar Hartana.",
};

export default function ProjectsPage() {
  return (
    <TerminalShell path="projects" label="Kumpulan proyek">
      <FadeInSection>
        <TerminalHeading
          command="ls projects/"
          description={`${projectItems.length} proyek yang pernah saya buat, dari eksperimen kecil sampai aplikasi full stack.`}
          className="mb-8"
        />
        <Project />
      </FadeInSection>
    </TerminalShell>
  );
}
