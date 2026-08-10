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
    <div className="flex flex-row gap-4 items-center justify-center">
      {contactItem.map((item, index) =>
        isWithName ? (
          <ScaleUp key={index} delay={index}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              id={`contact-social-with-name-${item.name.toLowerCase()}`}
              className="flex hover:text-primary active:text-primary gap-2 text-sm font-medium items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <span className="bg-muted p-2 rounded-full border border-border/40 hover:bg-primary/10 transition-colors">
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
            className="flex text-muted-foreground hover:text-primary active:text-primary p-2.5 rounded-full border border-border/40 bg-card/50 hover:bg-primary/10 transition-all duration-200 hover:scale-110 shadow-sm"
            aria-label={item.name}
          >
            {item.icon}
          </a>
        )
      )}
    </div>
  );
}
