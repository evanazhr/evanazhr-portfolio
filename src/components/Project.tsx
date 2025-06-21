import ScaleUp from '@/components/animation/ScaleUp'
import SpotlightCard from '@/components/SpotlightCard'

import Image from "next/image";

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card"


import { FaExternalLinkAlt, FaCode } from "react-icons/fa";


export default function Project() {
    const projectItems = [
        {
            title: "Aplikasi Kasir NextJs",
            description: "Aplikasi kasir yang dibuat dengan NextJs, Typescript, memiliki fitur auth dari Clerk, payment gateway dari xendit, dll. ",
            thumbnail: "/assets/image/gradient.png",
            link: "",
            repo: "https://github.com/evanazhr/simple-pos_nextjs.git",
            tech: ["Next.Js", "React.Js", "Typescript", "Tailwind"],
        },
        {
            title: "Suxz Landing Page",
            description: "belajar slicing UI, UI design dari codedesign.dev",
            thumbnail: "/assets/thumbnails/suxz-thumbnail.png",
            link: "https://suxz-codedesign-dev.vercel.app/",
            repo: "https://github.com/evanazhr/suxz-codedesign.dev.git",
            tech: ["Javascript", "Vue.Js", "Tailwind"],
        },
        {
            title: "Kocheng Landing Page",
            description: "Landing Page statis untuk komunitas kucing",
            thumbnail: "/assets/thumbnails/kocheng-thumbnail.png",
            link: "https://kocheng-green.vercel.app",
            repo: "https://github.com/evanazhr/landing-page-kocheng.git",
            tech: ["Javascript", "Vue.Js", "Tailwind"],
        },
        {
            title: "Simple Realtime Chat App",
            description: "Aplikasi Chatting simple dengan realtime chat",
            thumbnail: "/assets/image/gradient.png",
            link: "",
            repo: "https://github.com/evanazhr/simple-realtime-chat-app.git",
            tech: ["Javascript", "Tailwind"],

        },
        {
            title: "Web Sewa Kantor",
            description: "Web Sewa Kantor dengan Nextjs",
            thumbnail: "/assets/image/gradient.png",
            link: "",
            repo: "https://github.com/evanazhr/web-sewa-kantor",
            tech: ["Next.Js", "React.Js", "Typescript", "Tailwind"],
        },
        {
            title: "Bouncing Hello World",
            description: "Just Bouncing Hello World, hehe :3",
            thumbnail: "/assets/thumbnails/bouncing-hello-world.png",
            link: "https://bounced-hello-world.vercel.app/",
            repo: "https://github.com/evanazhr/hello-world.git",
            tech: ["HTML", "CSS"],
        },
        // Add more project items as needed
    ];

    const techIcons = (tech: string, size: number) => {
        const iconMap: Record<string, string> = {
            HTML: "/assets/icons/html-5.svg",
            CSS: "/assets/icons/css-3.svg",
            Javascript: "/assets/icons/javascript.svg",
            "React.Js": "/assets/icons/react.svg",
            "Vue.Js": "/assets/icons/vue.svg",
            "Next.Js": "/assets/icons/next-js.svg",
            Tailwind: "/assets/icons/tailwind-css.svg",
            Typescript: "/assets/icons/typescript.svg",
        };

        const src = iconMap[tech];
        return src ? (
            <Image
                src={src}
                alt={tech}
                width={24}
                height={24}
                title={tech}
                className={`opacity-80 hover:opacity-100 transition size-${size}`}
            />
        ) : null;
    };


    return (
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
            {
                projectItems.map((item, index) => (
                    <ScaleUp key={index} delay={index}>
                        <SpotlightCard className="custom-spotlight-card flex flex-col rounded-xl min-h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <Card className="overflow-hidden h-full justify-between shadow-lg transition-all duration-300 ease-in-out flex-grow">
                                <CardHeader>
                                    <div className="relative rounded-xl w-full h-48 h-80 md:h-48 mb-4 overflow-hidden">
                                        <Image
                                           width={300}
                                           height={300}
                                           src={item.thumbnail}
                                            className="object-fit object-cover w-full h-full"
                                            alt={`${item.title} project image`}
                                           
                                        />
                                    </div>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="flex items-start justify-between gap-4">

                                    <div className="flex flex-row items-center gap-2">
                                        {item.tech?.map((tech, index) => {
                                            return (
                                                <div key={index} title={tech}>
                                                    {techIcons(tech, 6)}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='flex text-md flex-row gap-2 justify-center items-center'>
                                        {item.link !== "" ? <a target="_blank" title='Live Demo' href={item.link} rel="noopener noreferrer" className="border border-primary  text-primary p-2 rounded-full decoration-none  hover:bg-primary hover:text-background flex gap-2 justify-center items-center hover:underline active:underline">

                                            <FaExternalLinkAlt title='Demo' />
                                        </a> : null}

                                        {item.repo !== "" ? <a target="_blank" title='Code' href={item.repo} rel="noopener noreferrer" className="border border-primary text-primary p-2 rounded-full hover:bg-primary hover:text-background flex gap-2 justify-center items-center hover:underline active:underline">
                                             <FaCode title='Source Code' />
                                        </a> : null}
                                    </div>
                                </CardFooter>
                            </Card>
                        </SpotlightCard>

                    </ScaleUp>

                ))
            }

        </div >

    )
}