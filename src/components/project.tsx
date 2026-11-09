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
        className="opacity-80 hover:opacity-100 transition duration-200 size-6"
      />
    ) : null;
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectItems.map((item, index) => (
        <ScaleUp key={index} delay={index}>
          <SpotlightCard
            className="custom-spotlight-card flex flex-col rounded-lg min-h-full"
            spotlightColor="rgba(127, 255, 0, 0.15)"
          >
            <Card className="overflow-hidden pt-0 justify-between shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex-grow bg-card/40 backdrop-blur-sm border-border/30 rounded-lg flex flex-col">
              <CardHeader className="px-0 pt-0">
                <div className="overflow-hidden aspect-video w-full relative">
                  <Image
                    width={600}
                    height={338}
                    src={item.thumbnail}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt={`${item.title} preview thumbnail`}
                  />
                </div>
                <CardTitle className="px-6 mt-5 text-xl font-bold font-heading">{item.title}</CardTitle>
                <CardDescription className="px-6 text-sm text-muted-foreground leading-relaxed mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between gap-4 px-6 pb-6 mt-auto">
                <div className="flex flex-row items-center gap-2">
                  {item.tech?.map((tech, i) => (
                    <div key={i} title={tech} className="bg-muted/80 p-1.5 rounded-md hover:bg-muted transition duration-200">
                      {techIcons(tech)}
                    </div>
                  ))}
                </div>
                <div className="flex text-md flex-row gap-2.5 justify-center items-center">
                  {item.link !== "" && (
                    <a
                      target="_blank"
                      id={`project-demo-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      title="Live Demo"
                      href={item.link}
                      rel="noopener noreferrer"
                      className="border border-primary text-primary p-2.5 rounded-full hover:bg-primary hover:text-primary-foreground flex gap-2 justify-center items-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
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
                      className="border border-primary text-primary p-2.5 rounded-full hover:bg-primary hover:text-primary-foreground flex gap-2 justify-center items-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
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
