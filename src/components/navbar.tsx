"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { MdHomeFilled, MdFolder, MdInfo } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const ModeToggle = ({
  variant,
}: {
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <Button
      variant={variant}
      id="theme-toggle"
      className="cursor-pointer size-9 rounded-full flex items-center justify-center text-lg transition-transform hover:scale-110 active:scale-95"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {mounted ? (
        isDark ? (
          <IoMdSunny className="text-yellow-400" />
        ) : (
          <IoMdMoon className="text-slate-700" />
        )
      ) : (
        <span className="size-4 rounded-full border border-border animate-pulse bg-muted" />
      )}
    </Button>
  );
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navbarItem: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "Home",
      href: "#home",
      icon: <MdHomeFilled className="text-xl" />,
    },
    {
      title: "About",
      href: "#about",
      icon: <MdInfo className="text-xl" />,
    },
    {
      title: "Project",
      href: "#project",
      icon: <MdFolder className="text-xl" />,
    },
  ];

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Handle bottom of page edge case for projects
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("project");
        return;
      }

      const sections = ["home", "about", "tech", "project"];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIsActive = (href: string) => {
    if (href === "#home") return activeSection === "home";
    if (href === "#about") return activeSection === "about" || activeSection === "tech";
    if (href === "#project") return activeSection === "project";
    return false;
  };

  return (
    <header className="fixed bottom-0 md:bottom-auto md:top-0 z-50 left-0 w-full">
      {/* Desktop Nav */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="px-4 hidden md:block md:px-8 container mx-auto"
      >
        <div className="flex justify-center w-fit mx-auto gap-6 px-4 rounded-full mt-4 items-center border border-border/40 py-1.5 bg-background/60 backdrop-blur-md shadow-lg shadow-background/5">
          <ul className="flex gap-1.5">
            {navbarItem.map((item, index) => {
              const isActive = getIsActive(item.href);
              return (
                <li key={index}>
                  <a
                    id={`nav-link-${item.title.toLowerCase()}`}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-full duration-200 px-4 py-2 text-sm font-medium transition-all relative",
                      isActive
                        ? "text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                    href={item.href}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm shadow-primary/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="flex items-center justify-center">{item.icon}</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="h-6 w-[1px] bg-border/60" />
          <ModeToggle variant="ghost" />
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0, x: "-50%" }}
        animate={{ scale: 1, y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-4 md:hidden left-1/2 border-border/40 p-1.5 rounded-full border bg-background/70 backdrop-blur-lg shadow-xl shadow-primary/10 flex gap-4 items-center"
      >
        <div className="flex gap-1.5 items-center">
          {navbarItem.map((item, index) => {
            const isActive = getIsActive(item.href);
            return (
              <a
                href={item.href}
                key={index}
                id={`mobile-nav-link-${item.title.toLowerCase()}`}
                className={cn(
                  "rounded-full p-2.5 duration-200 transition-all relative flex items-center justify-center size-10",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                aria-label={item.title}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavMobileBackground"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm shadow-primary/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="flex items-center justify-center">{item.icon}</div>
              </a>
            );
          })}
          <div className="h-6 w-[1px] bg-border/60 mx-1" />
          <ModeToggle variant="ghost" />
        </div>
      </motion.div>
    </header>
  );
}
