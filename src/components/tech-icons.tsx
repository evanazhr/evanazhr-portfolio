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
      className="flex flex-col items-center justify-center p-3 md:p-5 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm aspect-square hover:border-primary hover:shadow-md hover:shadow-primary/5 transition-all duration-300 hover:scale-105 group cursor-pointer"
      title={name}
    >
      {children}
      <p className="mt-2.5 text-center text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
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
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4 md:mt-8">
      {techIconItem.map((item, index) => (
        <ScaleUp key={index} delay={index}>
          <TechIcon name={item.name}>
            <div className="relative size-10 md:size-12 flex items-center justify-center">
              <Image
                src={item.icon}
                width={48}
                height={48}
                alt={`${item.name} logo icon`}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </TechIcon>
        </ScaleUp>
      ))}
    </div>
  );
}
