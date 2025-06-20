import Image from "next/image";
import FadeInSection from '@/components/animation/FadeInSection'
import WavingHand from '@/components/animation/WavingHand'
import SquareBackground from '@/components/SquareBackground'


import TechIcons from "@/components/TechIcons";
import Contact from "@/components/Contact";
import Project from "@/components/Project";

export default function Home() {

  return (
    <div className="w-full flex gap-20 flex-col">

      <div className="absolute top-0 left-0 opacity-10 w-full h-screen -z-50">
        <SquareBackground

          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          hoverFillColor='#222'
        />

      </div>
      <FadeInSection>

        <section className="w-full">
          <div className="px-4 md:px-8 relative  container h-screen flex items-center justify-center mx-auto">

            {/* <Image src={"/assets/image/gradient.png"} alt="gradient-bg" width={400} height={400} className="size-100 top-0 left-[2%] -z-10 absolute"></Image> */}
            <div className="flex md:flex-row-reverse flex-col justify-center items-center gap-8 md:gap-16">

              <div className="flex flex-col gap-2 md:justify-center items-center md:items-start order-2 md:order-0">
                <p className="text-3xl md:text-5xl">Hi
                  <WavingHand />
                  , I&apos;m </p>

                <h1 className="text-3xl md:text-7xl font-bold md:text-5xl">Evan Azhar Hartana</h1>
                <p className="text-md md:text-3xl font-semibold text-primary">Learner | Student | Web Developer</p>
                <div className="text-3xl mt-4">
                  <Contact withName={false} />
                </div>
              </div>


            </div>
          </div>
        </section >
      </FadeInSection>


      {/* About section */}
      <FadeInSection>
        
      <section className="w-full" >
        <div className="px-4 md:px-8  container py-20  mx-auto">

          <div className="md:flex-row flex-col flex gap-20">
            <div className="flex flex-col md:w-3/5 gap-8">
              <h1 className="text-3xl font-bold">Tentang Saya</h1>
              <p className="text-justify text-base">Saya Evan, saya sedang membangun fundamental yang kuat dalam pengembangan web. Perjalanan saya dimulai dengan belajar HTML, CSS, dan JavaScript, dan sekarang saya sedang meningkatkan kemampuan saya dengan belajar framework Vue, React, dan Next.js.
              </p>
              <p className="text-justify text-base">Website ini adalah catatan visual dari proses belajar saya. Proyek-proyek di sini mencerminkan eksperimen dan aplikasi praktis dari konsep-konsep yang saya pelajari. Saya berkomitmen untuk terus belajar, meningkatkan keterampilan saya dan mencari tantangan baru.
              </p>
            </div>
            <div className="flex items-center justify-center md:w-2/5">
              <Image src={'/assets/image/avatar.jpg'} alt="hero-avatar" width={400} height={400} quality={100} priority
                className="size-full rounded-lg shadow-sm object-fit object-cover" />

            </div>
          </div>
          </div>
        </section>
      </FadeInSection>


      {/* Tech Stack */}
      <section className="w-full bg-accent" >
        <div className="px-4 md:px-8  container py-20  mx-auto">

          <div className="text-base flex flex-col gap-8">
            <h1 className="text-3xl font-bold">Tech Stack</h1>
            <div className="gap-4 flex flex-col">
              <p>Teknologi yang saya pelajari dan gunakan</p>
              <TechIcons />
            </div>
          </div>
        </div>

      </section>

      <section className="w-full" >
        <div className="px-4 md:px-8  container py-20 mx-auto">
        <div className="text-base flex flex-col gap-8">
          <h1 className="text-3xl font-bold">Projects</h1>
          <div className="gap-4 flex flex-col">
            <p>Beberapa Project yang pernah saya buat</p>
            <Project />
          </div>
          </div>

        </div>
      </section>


    </div>
  );
}
