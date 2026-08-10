import FadeInSection from "@/components/animation/FadeInSection";
import Contact from "@/components/contact";

export default function Footer() {
  return (
    <FadeInSection>
      <section className="w-full border-t border-border/40 bg-card/30 backdrop-blur-sm mt-12">
        <div className="w-full max-w-5xl pb-24 pt-8 md:pb-8 md:pt-8 px-4 md:px-8 mx-auto">
          <div className="flex flex-col w-full justify-center gap-4 items-center">
            <Contact withName={true} />
            <div className="text-center text-xs text-muted-foreground pt-4 border-t border-border/20 w-full">
              &copy; {new Date().getFullYear()} Evan Azhar Hartana. Made with React & Next.js.
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
