import { cn } from "@/lib/utils";

type TerminalShellProps = {
  path?: string;
  title?: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function TerminalShell({
  path,
  title = "bash",
  label,
  children,
  className,
  contentClassName,
}: TerminalShellProps) {
  return (
    <div className="flex h-svh w-full justify-center px-3 pt-3 pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:px-6 md:pt-20 md:pb-14">
      <div
        className={cn(
          "border-border bg-card/55 flex h-full min-h-0 w-full max-w-5xl flex-col overflow-hidden rounded-md border",
          className,
        )}
      >
        <div className="border-border text-muted-foreground flex shrink-0 items-center gap-2 border-b px-4 py-2.5 font-mono text-[11px]">
          <span
            className="bg-primary size-1.5 rounded-full"
            aria-hidden="true"
          />
          <span className="text-foreground/70">evan@portfolio</span>
          <span aria-hidden="true">:</span>
          <span className="text-primary truncate">~/{path}</span>
          <span className="ml-auto shrink-0">{title}</span>
        </div>
        <div
          tabIndex={0}
          role="region"
          aria-label={label ?? `Konten ${title}`}
          className={cn(
            "terminal-scroll min-h-0 flex-1 overflow-y-auto p-5 md:p-8",
            contentClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
