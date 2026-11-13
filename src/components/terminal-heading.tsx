import { cn } from "@/lib/utils";

type TerminalHeadingProps = {
  command: string;
  description?: string;
  as?: "h1" | "h2";
  size?: "page" | "section";
  icon?: React.ReactNode;
  meta?: React.ReactNode;
  className?: string;
};

export default function TerminalHeading({
  command,
  description,
  as = "h1",
  size = "page",
  icon,
  meta,
  className,
}: TerminalHeadingProps) {
  const Tag = as;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Tag
        className={cn(
          "flex flex-wrap items-center gap-x-2 gap-y-1 font-mono font-medium",
          size === "page" ? "text-xl md:text-2xl" : "text-base md:text-lg",
        )}
      >
        <span className="text-primary" aria-hidden="true">
          $
        </span>
        <span>{command}</span>
        {icon && <span className="text-muted-foreground ml-1">{icon}</span>}
      </Tag>
      {description && (
        <p className="text-muted-foreground max-w-[62ch] text-sm leading-6">
          {description}
        </p>
      )}
      {meta}
    </div>
  );
}
