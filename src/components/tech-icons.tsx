"use client";
import ScaleUp from "@/components/animation/ScaleUp";
import Image from "next/image";

type iconType = {
  children: React.ReactNode;
  name: string;
};

function TechIcon({ children, name }: iconType) {
  return (
    <div
      className="flex flex-col items-center justify-center p-3 md:p-5 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm aspect-square hover:border-primary hover:shadow-md hover:shadow-primary/5 transition-all duration-300 hover:scale-105 group cursor-pointer"
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
  const techIconItem = [
    {
      name: "HTML",
      icon: "/assets/icons/html-5.svg",
    },
    {
      name: "CSS",
      icon: "/assets/icons/css-3.svg",
    },
    {
      name: "Javascript",
      icon: "/assets/icons/javascript.svg",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/icons/tailwind-css.svg",
    },
    {
      name: "Typescript",
      icon: "/assets/icons/typescript.svg",
    },
    {
      name: "VueJs",
      icon: "/assets/icons/vue.svg",
    },
    {
      name: "React",
      icon: "/assets/icons/react.svg",
    },
    {
      name: "NextJs",
      icon: "/assets/icons/next-js.svg",
    },
  ];

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
