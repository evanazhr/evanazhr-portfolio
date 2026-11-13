"use client";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Folder, Home, Info, NotebookPen, SquareTerminal } from "lucide-react";

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
  const pathname = usePathname();

  const navbarItem: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="text-lg md:text-xl" />,
    },
    {
      title: "About",
      href: "/about",
      icon: <Info className="text-lg md:text-xl" />,
    },
    {
      title: "Tech",
      href: "/tech",
      icon: <SquareTerminal className="text-lg md:text-xl" />,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: <Folder className="text-lg md:text-xl" />,
    },
    {
      title: "Blogs",
      href: "/blogs",
      icon: <NotebookPen className="text-lg md:text-xl" />,
    },
  ];

  const getIsActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed bottom-0 left-0 z-50 w-full md:top-0 md:bottom-auto">
      {/* Desktop Nav */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto hidden px-4 md:block md:px-8"
      >
        <div className="border-border/40 bg-background/60 shadow-background/5 dark:shadow-foreground/10 mx-auto mt-4 flex w-fit items-center gap-3 rounded-lg border px-3 py-2 font-mono text-sm shadow-lg backdrop-blur-md">
          <span className="text-muted-foreground hidden xl:inline">
            evan@portfolio:~$
          </span>
          <ul className="flex gap-1">
            {navbarItem.map((item) => {
              const isActive = getIsActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    id={`nav-link-${item.title.toLowerCase()}`}
                    className={cn(
                      "relative flex items-center justify-center gap-2 rounded-md px-3 py-2 font-medium transition-all duration-200",
                      isActive
                        ? "text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
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
                    <span className="hidden xl:inline">
                      ./{item.title.toLowerCase()}
                    </span>
                  </Link>
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
        className="border-border/40 bg-background/70 shadow-primary/10 dark:shadow-foreground/10 fixed bottom-4 left-1/2 flex items-center gap-1 rounded-md border p-1.5 shadow-xl backdrop-blur-lg md:hidden"
      >
        <div className="flex items-center gap-1">
          {navbarItem.map((item) => {
            const isActive = getIsActive(item.href);
            return (
              <Link
                href={item.href}
                key={item.href}
                id={`mobile-nav-link-${item.title.toLowerCase()}`}
                className={cn(
                  "relative flex size-9 items-center justify-center rounded-md p-2 transition-all duration-200",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
                aria-label={item.title}
                aria-current={isActive ? "page" : undefined}
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
              </Link>
            );
          })}
          <div className="bg-border/60 mx-0.5 h-6 w-[1px]" />
          <ModeToggle variant="ghost" />
        </div>
      </motion.div>
    </header>
  );
}
