import Contact from "@/components/contact";

export default function Footer() {
  return (
    <footer className="border-border/40 bg-background/70 fixed bottom-0 left-0 z-40 hidden w-full border-t font-mono text-xs backdrop-blur-md md:block">
      <div className="text-muted-foreground mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-8 py-2.5">
        <p>
          <span className="text-primary">$</span> © {new Date().getFullYear()}{" "}
          Evan Azhar Hartana · Built with React &amp; Next.js
        </p>
        <Contact withName={false} />
      </div>
    </footer>
  );
}
