"use client";
import ScaleUp from "@/components/animation/ScaleUp";
import SpotlightCard from "@/components/spotlight-card";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { projectItems } from "@/data/projects";
import { techRegistry } from "@/data/tech-stack";

export default function Project() {
  const techIcons = (tech: string) => {
    // Ambil path icon secara dinamis dari techRegistry terpusat
    const src = techRegistry[tech];
    return src ? (
      <Image
        src={src}
        alt={tech}
        width={24}
        height={24}
        title={tech}
        className="size-6 opacity-80 transition duration-200 hover:opacity-100"
      />
    ) : null;
  };

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projectItems.map((item, index) => (
        <ScaleUp key={index} delay={index}>
          <SpotlightCard
            className="custom-spotlight-card flex min-h-full flex-col rounded-lg"
            spotlightColor="rgba(127, 255, 0, 0.15)"
          >
              <Card className="bg-card/40 border-border/30 flex flex-grow flex-col justify-between overflow-hidden rounded-lg pt-0 shadow-md backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl">
              <CardHeader className="px-0 pt-0">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    width={600}
                    height={338}
                    src={item.thumbnail}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    alt={`${item.title} preview thumbnail`}
                  />
                </div>
                <CardTitle className="font-heading mt-5 px-6 text-xl font-bold">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2 px-6 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex items-center justify-between gap-4 px-6 pb-6">
                <div className="flex flex-row items-center gap-2">
                  {item.tech?.map((tech, i) => (
                    <div
                      key={i}
                      title={tech}
                      className="bg-muted/80 hover:bg-muted rounded-md p-1.5 transition duration-200"
                    >
                      {techIcons(tech)}
                    </div>
                  ))}
                </div>
                <div className="text-md flex flex-row items-center justify-center gap-2.5">
                  {item.link !== "" && (
                    <a
                      target="_blank"
                      id={`project-demo-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      title="Live Demo"
                      href={item.link}
                      rel="noopener noreferrer"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-2 rounded-full border p-2.5 shadow-sm transition-all duration-200 hover:scale-110 active:scale-95"
                      aria-label={`Lihat Demo Live ${item.title}`}
                    >
                      <FaExternalLinkAlt size={14} title="Demo" />
                    </a>
                  )}

                  {item.repo !== "" && (
                    <a
                      target="_blank"
                      id={`project-repo-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      title="Source Code"
                      href={item.repo}
                      rel="noopener noreferrer"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-2 rounded-full border p-2.5 shadow-sm transition-all duration-200 hover:scale-110 active:scale-95"
                      aria-label={`Lihat Repositori Kode ${item.title}`}
                    >
                      <FaCode size={14} title="Source Code" />
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          </SpotlightCard>
        </ScaleUp>
      ))}
    </div>
  );
}
