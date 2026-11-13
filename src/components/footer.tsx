import Contact from "@/components/contact";

export default function Footer() {
  return (
    <footer className="border-border bg-background/85 fixed bottom-0 left-0 z-40 hidden w-full border-t backdrop-blur-md md:block">
      <div className="text-muted-foreground mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-2.5 font-mono text-[11px]">
        <p className="flex items-center gap-2">
          <span
            className="bg-success size-1.5 rounded-full"
            aria-hidden="true"
          />
          <span>© {new Date().getFullYear()} Evan Azhar Hartana</span>
          <span
            className="text-muted-foreground/40 hidden lg:inline"
            aria-hidden="true"
          >
            /
          </span>
          <span className="hidden lg:inline">React + Next.js</span>
        </p>
        <Contact withName={false} />
      </div>
    </footer>
  );
}
