"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Folder, Home, Info, NotebookPen, SquareTerminal } from "lucide-react";

const navItems = [
  { title: "Home", label: "home", href: "/", icon: Home },
  { title: "About", label: "about", href: "/about", icon: Info },
  { title: "Tech", label: "tech", href: "/tech", icon: SquareTerminal },
  { title: "Projects", label: "projects", href: "/projects", icon: Folder },
  { title: "Blogs", label: "blogs", href: "/blogs", icon: NotebookPen },
];

function ModeToggle({ suffix }: { suffix: "desktop" | "mobile" }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";
  const label = isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap";

  return (
    <button
      type="button"
      id={`theme-toggle-${suffix}`}
      className="text-muted-foreground hover:text-foreground hover:border-border flex size-8 cursor-pointer items-center justify-center rounded-sm border border-transparent text-base transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      {mounted ? (
        isDark ? (
          <IoMdSunny className="text-primary" aria-hidden="true" />
        ) : (
          <IoMdMoon aria-hidden="true" />
        )
      ) : (
        <span
          className="border-border size-3.5 animate-pulse rounded-full border"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const getIsActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 hidden md:block">
        <div className="border-border bg-background/85 border-b backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-5xl items-center gap-5 px-6">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground hidden shrink-0 font-mono text-[11px] transition-colors lg:inline"
            >
              <span className="text-primary">evan@portfolio</span>
              <span aria-hidden="true">:</span>
              <span className="text-primary">~</span>
              <span aria-hidden="true">$</span>
            </Link>

            <nav aria-label="Navigasi utama">
              <ul className="flex items-center gap-0.5">
                {navItems.map((item) => {
                  const isActive = getIsActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        id={`nav-link-${item.label}`}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group flex items-center rounded-sm px-2 py-1.5 font-mono text-[11px] transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground/30"
                          }
                        >
                          [
                        </span>
                        <span
                          className={cn(
                            "px-0.5",
                            !isActive && "group-hover:text-foreground",
                          )}
                        >
                          {item.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className={
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground/30"
                          }
                        >
                          ]
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <span className="text-muted-foreground hidden items-center gap-1.5 font-mono text-[11px] xl:flex">
                <span
                  className="bg-success size-1.5 rounded-full"
                  aria-hidden="true"
                />
                open to work
              </span>
              <span
                className="bg-border hidden h-5 w-px xl:block"
                aria-hidden="true"
              />
              <ModeToggle suffix="desktop" />
            </div>
          </div>
        </div>
      </header>

      <nav
        aria-label="Navigasi utama"
        className="fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <div className="border-border bg-background/90 mx-3 mb-3 flex items-stretch rounded-md border p-1 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = getIsActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                id={`mobile-nav-link-${item.label}`}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.title}
                className={cn(
                  "flex flex-1 flex-col items-center gap-1 rounded-sm px-1 py-1.5 font-mono text-[9px] transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <span className="bg-border mx-1 my-1 w-px" aria-hidden="true" />
          <div className="flex items-center px-0.5">
            <ModeToggle suffix="mobile" />
          </div>
        </div>
      </nav>
    </>
  );
}
