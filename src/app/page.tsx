import Image from "next/image";
import FadeInSection from '@/components/animation/FadeInSection'
import WavingHand from '@/components/animation/WavingHand'

import TechIcons from "@/components/TechIcons";
import Contact from "@/components/Contact";
import Project from "@/components/Project";

export default function Home() {

  return (
    <div className="w-full flex gap-20 flex-col">
      <FadeInSection>

        <section className="px-4 md:px-8 relative md:py-20 container mx-auto">
          <Image src={"/assets/image/gradient.png"} alt="gradient-bg" width={400} height={400} className="size-100 top 0 left-[2%] -z-10 absolute"></Image>

          <div className="flex md:flex-row-reverse flex-col justify-center items-center gap-8 md:gap-16">

            <div className="flex flex-col gap-2 md:justify-center items-center md:items-start order-2 md:order-0">
              <p className="text-3xl">Hi
                <WavingHand/>
                , I&apos;m </p>

              <h1 className="text-3xl md:text-5xl font-bold md:text-5xl">Evan Azhar Hartana</h1>
              <p className="text-md md:text-xl font-semibold text-primary">Learner | Student | Web Developer</p>
              <div className="text-3xl mt-4">
                <Contact withName={false} />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image src={'/assets/image/avatar.jpg'} alt="hero-avatar" width={400} height={400} quality={100} priority
                className="size-50 rounded-full shadow-md shadow-primary " />

            </div>

          </div>
        </section >
      </FadeInSection>


      <FadeInSection>
        <section className="px-4 md:px-8 py-8 md:py-16  container mx-auto " id="about">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold">Tentang Saya</h1>
            <p className="text-justify text-base">Saya Evan, saya sedang membangun fundamental yang kuat dalam pengembangan web. Perjalanan saya dimulai dengan belajar HTML, CSS, dan JavaScript, dan sekarang saya sedang meningkatkan kemampuan saya dengan belajar framework Vue, React, dan Next.js.
            </p>
            <p className="text-justify text-base">Website ini adalah catatan visual dari proses belajar saya. Proyek-proyek di sini mencerminkan eksperimen dan aplikasi praktis dari konsep-konsep yang saya pelajari. Saya berkomitmen untuk terus belajar, meningkatkan keterampilan saya dan mencari tantangan baru.
            </p>
          </div>
        </section>
      </FadeInSection>


      {/* Tech Stack */}
      <section className="px-4 md:px-8 py-8 md:py-16 container mx-auto">
        <div className="text-base flex flex-col gap-8">
          <h1 className="text-3xl font-bold">Tech Stack</h1>
          <div className="gap-4 flex flex-col">
            <p>Teknologi yang saya pelajari dan gunakan</p>
            <TechIcons />
          </div>
        </div>
      </section>

      <section id="project" className="px-4 md:px-8 py-8 md:py-16 container mx-auto">
        <div className="text-base flex flex-col gap-8">
          <h1 className="text-3xl font-bold">Projects</h1>
          <div className="gap-4 flex flex-col">
            <p>Beberapa Project yang pernah saya buat</p>
            <Project />
          </div>

        </div>
      </section>

      {/* Contact Section */}

      {/* <FadeInSection>
        <section id="contact" className="px-4 md:px-8 md:py-4 container mx-auto">
          <div className="text-base flex flex-col text-center justify-center items-center gap-8  rounded-xl py-20 bg-card">
            <h1 className="text-3xl font-bold">Contact</h1>
            <div>
              <Contact withName={true} />
            </div>
          </div>
        </section>
      </FadeInSection> */}


    </div>
  );
}
