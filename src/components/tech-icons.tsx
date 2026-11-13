import Image from "next/image";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import type { IconType } from "react-icons";
import { techRegistry, featuredTechStack } from "@/data/tech-stack";

// Ikon monokrom yang perlu mengikuti warna teks agar terbaca di kedua tema.
const inlineIcons: Record<string, IconType> = {
  NextJs: SiNextdotjs,
  "Express.js": SiExpress,
};

export default function TechIcons() {
  const techIconItems = featuredTechStack.map((name) => ({
    name,
    icon: techRegistry[name],
    inlineIcon: inlineIcons[name],
  }));

  return (
    <ul className="mt-6 grid grid-cols-5 gap-x-2 gap-y-5 sm:grid-cols-6 md:grid-cols-8">
      {techIconItems.map((item) => {
        const InlineIcon = item.inlineIcon;

        return (
          <li
            key={item.name}
            className="group flex flex-col items-center gap-2"
            title={item.name}
          >
            <div className="flex size-9 items-center justify-center md:size-10">
              {InlineIcon ? (
                <InlineIcon
                  aria-hidden="true"
                  className="text-foreground size-full transition-opacity duration-200 group-hover:opacity-100 md:opacity-90"
                />
              ) : item.icon ? (
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt=""
                  sizes="40px"
                  className="size-full object-contain transition-opacity duration-200 group-hover:opacity-100 md:opacity-90"
                />
              ) : (
                <span className="text-muted-foreground font-mono text-[10px]">
                  ?
                </span>
              )}
            </div>
            <span className="text-muted-foreground group-hover:text-foreground font-mono text-[10px] transition-colors">
              {item.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
