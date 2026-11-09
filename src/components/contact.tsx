"use client";
import ScaleUp from "@/components/animation/ScaleUp";
import { useState } from "react";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export default function Contact({ withName }: { withName: boolean }) {
  const [isWithName] = useState(withName);

  const contactItem = [
    {
      icon: <IoLogoGithub className="text-xl" />,
      name: "Github",
      link: "https://github.com/evanazhr",
    },
    {
      icon: <IoLogoLinkedin className="text-xl" />,
      name: "Linkedin",
      link: "https://linkedin.com/in/evan-azhar-hartana-151434365",
    },
    {
      icon: <IoLogoInstagram className="text-xl" />,
      name: "Instagram",
      link: "https://www.instagram.com/evanazh/",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      {contactItem.map((item, index) =>
        isWithName ? (
          <ScaleUp key={index} delay={index}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              id={`contact-social-with-name-${item.name.toLowerCase()}`}
              className="hover:text-primary active:text-primary flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              <span className="bg-muted border-border/40 hover:bg-primary/10 rounded-full border p-2 transition-colors">
                {item.icon}
              </span>
              <p>{item.name}</p>
            </a>
          </ScaleUp>
        ) : (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            id={`contact-social-${item.name.toLowerCase()}`}
            className="text-muted-foreground hover:text-primary active:text-primary border-border/40 bg-card/50 hover:bg-primary/10 flex rounded-full border p-2.5 shadow-sm transition-all duration-200 hover:scale-110"
            aria-label={item.name}
          >
            {item.icon}
          </a>
        ),
      )}
    </div>
  );
}
