import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMailOutline,
} from "react-icons/io5";

const contactItems = [
  {
    icon: IoLogoGithub,
    name: "GitHub",
    link: "https://github.com/evanazhr",
  },
  {
    icon: IoLogoLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/evan-azhar-hartana/",
  },
  {
    icon: IoMailOutline,
    name: "Email",
    link: "mailto:evanazhr@gmail.com",
  },
  {
    icon: IoLogoInstagram,
    name: "Instagram",
    link: "https://www.instagram.com/evanazh/",
  },
];

export default function Contact({ withName }: { withName: boolean }) {
  return (
    <ul className="flex flex-row flex-wrap items-center gap-3">
      {contactItems.map((item) => {
        const Icon = item.icon;
        const isExternal = item.link.startsWith("http");

        return (
          <li key={item.name}>
            <a
              href={item.link}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={withName ? undefined : item.name}
              className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 font-mono text-[11px] transition-colors"
            >
              <Icon className="size-4" aria-hidden="true" />
              {withName && <span>{item.name}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
