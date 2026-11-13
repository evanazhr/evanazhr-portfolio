import { cn } from "@/lib/utils";

type TerminalShellProps = {
  path?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function TerminalShell({
  path,
  title = "bash",
  children,
  className,
  contentClassName,
}: TerminalShellProps) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center px-3 pt-6 pb-24 md:px-8 md:pt-24 md:pb-16">
      <div
        className={cn(
          "border-border/50 bg-background/50 dark:shadow-foreground/10 flex h-[calc(100svh-7.5rem)] w-full max-w-5xl flex-col overflow-hidden rounded-lg border shadow-xl backdrop-blur-sm md:h-[calc(100svh-10rem)]",
          className,
        )}
      >
        <div className="border-border/50 text-muted-foreground flex shrink-0 items-center gap-2 border-b px-4 py-3 font-mono text-xs">
          <span className="text-primary" aria-hidden="true">
            ●
          </span>
          <span className="truncate">
            evan@portfolio:~{path ? `/${path}` : ""}
          </span>
          <span className="ml-auto">{title}</span>
        </div>
        <div
          className={cn(
            "terminal-scroll min-h-0 flex-1 overflow-y-auto p-5 md:p-10",
            contentClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
