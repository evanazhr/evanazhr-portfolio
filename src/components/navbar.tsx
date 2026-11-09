"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import { MdHomeFilled, MdFolder, MdInfo } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Folder, Home, Info, Notebook, NotebookPen } from "lucide-react";

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
      className="flex size-9 cursor-pointer items-center justify-center rounded-full text-lg transition-transform hover:scale-110 active:scale-95"
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
        <span className="border-border bg-muted size-4 animate-pulse rounded-full border" />
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
      href: "/#home",
      icon: <Home className="text-xl" />,
    },
    {
      title: "About",
      href: "/#about",
      icon: <Info className="text-xl" />,
    },
    {
      title: "Project",
      href: "/#project",
      icon: <Folder className="text-xl" />,
    },
       {
      title: "Blogs",
      href: "/blogs",
      icon: <NotebookPen className="text-xl" />,
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
    if (href === "#about")
      return activeSection === "about" || activeSection === "tech";
    if (href === "#project") return activeSection === "project";
    return false;
  };

  return (
    <header className="fixed bottom-0 left-0 z-50 w-full md:top-0 md:bottom-auto">
      {/* Desktop Nav */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto hidden px-4 md:block md:px-8"
      >
        <div className="border-border/40 bg-background/60 shadow-background/5 mx-auto mt-4 flex w-fit items-center justify-center gap-6 rounded-lg border px-4 py-1.5 shadow-lg backdrop-blur-md">
          <ul className="flex gap-1.5">
            {navbarItem.map((item, index) => {
              const isActive = getIsActive(item.href);
              return (
                <li key={index}>
                  <a
                    id={`nav-link-${item.title.toLowerCase()}`}
                    className={cn(
                      "relative flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                    href={item.href}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="bg-primary shadow-primary/20 absolute inset-0 -z-10 rounded-md shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="flex items-center justify-center">
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="bg-border/60 h-6 w-[1px]" />
          <ModeToggle variant="ghost" />
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0, x: "-50%" }}
        animate={{ scale: 1, y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="border-border/40 bg-background/70 shadow-primary/10 fixed bottom-4 left-1/2 flex items-center gap-4 rounded-lg border p-1.5 shadow-xl backdrop-blur-lg md:hidden"
      >
        <div className="flex items-center gap-1.5">
          {navbarItem.map((item, index) => {
            const isActive = getIsActive(item.href);
            return (
              <a
                href={item.href}
                key={index}
                id={`mobile-nav-link-${item.title.toLowerCase()}`}
                className={cn(
                  "relative flex size-10 items-center justify-center rounded-md p-2.5 transition-all duration-200",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
                aria-label={item.title}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavMobileBackground"
                    className="bg-primary shadow-primary/20 absolute inset-0 -z-10 rounded-md shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>
              </a>
            );
          })}
          <div className="bg-border/60 mx-1 h-6 w-[1px]" />
          <ModeToggle variant="ghost" />
        </div>
      </motion.div>
    </header>
  );
}
