import Image from "next/image";
import FadeInSection from '@/components/animation/FadeInSection'
import WavingHand from '@/components/animation/WavingHand'
import SquareBackground from '@/components/square-background'

import TechIcons from "@/components/tech-icons";
import Contact from "@/components/contact";
import Project from "@/components/project";

import { Code, CodeXml } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full flex gap-12 md:gap-24 flex-col relative pb-20 overflow-hidden">
      {/* Dynamic Glow and Grid Background */}
      <div className="grid-background" />
      <div className="glow-nebula" />
      <div className="glow-nebula-secondary" />

      <FadeInSection>
        <section id="home" className="w-full min-h-[90vh] pt-16 md:pt-20 pb-10 flex items-center justify-center">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="flex md:flex-row-reverse flex-col justify-center items-center gap-10 md:gap-12">
              <div className="relative flex items-center justify-center md:w-5/12">
                <Image
                  src="/assets/image/avatar.jpeg"
                  alt="Evan Azhar Hartana Portrait"
                  width={400}
                  height={400}
                  quality={100}
                  priority
                  className="size-60 md:size-80 aspect-square rounded-full shadow-xl object-cover border-4 border-card hover:scale-105 transition-transform duration-500 ease-out"
                />
                <Code className="absolute -top-5 -left-4 md:-left-6 md:-top-6 text-primary animate-float size-12 md:size-16 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                <CodeXml className="absolute -bottom-5 -right-4 md:-right-6 md:-bottom-6 text-primary animate-float-delayed size-12 md:size-16 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
              </div>
              <div className="flex flex-col md:w-7/12 gap-3 md:justify-center items-center md:items-start text-center md:text-left">
                <p className="text-2xl md:text-4xl font-medium tracking-tight">
                  Hi <WavingHand />, I&apos;m
                </p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                  Evan Azhar Hartana
                </h1>
                <p className="text-base md:text-xl font-semibold text-primary/95 max-w-md">
                  Undergraduate Computer System Student | Fullstack Web Developer
                </p>
                <div className="text-3xl mt-4">
                  <Contact withName={false} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* About section */}
      <FadeInSection>
        <section id="about" className="w-full">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="bg-card/30 backdrop-blur-sm border border-border/40 p-6 md:p-10 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-bold leading-[1.25]">Tentang Saya</h2>
              <p className="text-justify text-base leading-[1.6] mt-4 text-muted-foreground">
                Saya Evan, saya sedang belajar membangun fundamental dalam pengembangan web. Perjalanan saya dimulai dengan belajar HTML, CSS, dan JavaScript, dan sekarang saya sedang meningkatkan kemampuan saya dengan belajar framework Vue, React, dan Next.js. Saya bertujuan untuk menjadi seorang Fullstack Web Developer dan seorang Mobile App Developer.
              </p>
              <p className="text-justify text-base leading-[1.6] mt-4 text-muted-foreground">
                Website ini adalah catatan visual dari proses belajar saya. Proyek-proyek di sini mencerminkan eksperimen dan aplikasi praktis dari konsep-konsep yang saya pelajari. Saya berkomitmen untuk terus belajar, meningkatkan keterampilan saya dan mencari tantangan baru.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Tech Stack */}
      <FadeInSection>
        <section id="tech" className="w-full">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <Card className="bg-card/30 backdrop-blur-sm border-border/40 shadow-sm">
              <CardHeader className="md:px-8 pt-8">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  Tech Stack <Code className="size-8 text-primary" />
                </h2>
                <p className="text-base mt-2 text-muted-foreground">
                  Teknologi yang saya pelajari dan gunakan
                </p>
              </CardHeader>
              <CardContent className="md:px-8 pb-8">
                <TechIcons />
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <section id="project" className="w-full py-10">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="text-base flex flex-col gap-6">
              <h2 className="text-3xl font-bold">Projects</h2>
              <div className="gap-6 flex flex-col">
                <p className="text-muted-foreground">
                  Beberapa Project yang pernah saya buat
                </p>
                <Project />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
