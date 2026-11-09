"use client";
import ScaleUp from "@/components/animation/ScaleUp";
import Image from "next/image";
import { techRegistry, featuredTechStack } from "@/data/tech-stack";

type iconType = {
  children: React.ReactNode;
  name: string;
};

function TechIcon({ children, name }: iconType) {
  return (
    <div
      className="border-border/40 bg-card/30 hover:border-primary hover:shadow-primary/5 group flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border p-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-md md:p-5"
      title={name}
    >
      {children}
      <p className="text-muted-foreground group-hover:text-primary mt-2.5 text-center text-[10px] font-medium transition-colors duration-200 md:text-xs">
        {name}
      </p>
    </div>
  );
}

export default function TechIcons() {
  // Map featured tech names to their registered icons
  const techIconItem = featuredTechStack.map((name) => ({
    name,
    icon: techRegistry[name] || "/assets/icons/default.svg", // Fallback if icon is missing
  }));

  return (
    <div className="mt-4 grid grid-cols-4 gap-4 md:mt-8 md:grid-cols-6 lg:grid-cols-8">
      {techIconItem.map((item, index) => (
        <ScaleUp key={index} delay={index}>
          <TechIcon name={item.name}>
            <div className="relative flex size-10 items-center justify-center md:size-12">
              <Image
                src={item.icon}
                width={48}
                height={48}
                alt={`${item.name} logo icon`}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </TechIcon>
        </ScaleUp>
      ))}
    </div>
  );
}
