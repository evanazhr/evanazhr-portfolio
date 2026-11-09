import FadeInSection from "@/components/animation/FadeInSection";
import Contact from "@/components/contact";

export default function Footer() {
  return (
    <FadeInSection>
      <section className="border-border/40 bg-card/30 mt-12 w-full border-t backdrop-blur-sm">
        <div className="mx-auto w-full max-w-5xl px-4 pt-8 pb-24 md:px-8 md:pt-8 md:pb-8">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <Contact withName={true} />
            <div className="text-muted-foreground border-border/20 w-full border-t pt-4 text-center text-xs">
              &copy; {new Date().getFullYear()} Evan Azhar Hartana. Made with
              React & Next.js.
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
