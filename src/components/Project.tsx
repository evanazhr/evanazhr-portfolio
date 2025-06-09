import Image from "next/image";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card"


import { FaExternalLinkAlt } from "react-icons/fa";


export default function Project() {
    const projectItems = [
        {
            title: "Suxz Landing Page",
            description: "belajar slicing UI, UI design dari codedesign.dev",
            id: 1,
            thumbnail: "/assets/thumbnails/suxz-thumbnail.png",
            link: "https://suxz-codedesign-dev.vercel.app/",
            tech: ["Vue.Js", "Tailwind"],
        },
        {
            title: "Kocheng Landing Page",
            description: "Landing Page statis untuk komunitas kucing",
            id: 2,
            thumbnail: "/assets/thumbnails/kocheng-thumbnail.png",
            link: "https://kocheng-green.vercel.app",
            tech: ["Vue.Js", "Tailwind"],

        }, {
            title: "Bouncing Hello World",
            description: "Just Bouncing Hello World, hehe :3",
            id: 3,
            thumbnail: "/assets/thumbnails/bouncing-hello-world.png",
            link: "https://bounced-hello-world.vercel.app/",
            tech: ["HTML", "CSS", "Javascript"],
        },
        // Add more project items as needed
    ];

    const techIcons = (tech: string, size:number) => {
        const iconMap: Record<string, string> = {
          HTML: "/assets/icons/html-5.svg",
          CSS: "/assets/icons/css-3.svg",
          Javascript: "/assets/icons/javascript.svg",
          "React.Js": "/assets/icons/react.svg",
          "Vue.Js": "/assets/icons/vue.svg",
          "Next.Js": "/assets/icons/next.svg",
          Tailwind: "/assets/icons/tailwind-css.svg",
          TypeScript: "/assets/icons/typescript.svg",
        };
      
        const src = iconMap[tech];
        return src ? (
          <Image
            src={src}
            alt={tech}
            width={size}
            height={size}
            title={tech}
            className="opacity-80 hover:opacity-100 transition"
          />
        ) : null;
      };
      

    return (
        <div className=" w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                projectItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden shadow-lg transition-transform transform hover:scale-105 active:scale-105 duration-300 ease-in-out">
                        <CardHeader>
                            <div className="relative rounded-xl w-full h-48 mb-4 overflow-hidden">
                                <Image
                                    src={item.thumbnail}
                                    className="object-fit object-cover"
                                    alt={`${item.title} project image`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col items-start justify-center gap-4">
                            <a target="_blank" href={item.link} rel="noopener noreferrer" className="text-primary flex gap-2 justify-center items-center hover:underline active:underline">
                                View Project <FaExternalLinkAlt />
                
                            </a>
                            <div className="flex flex-row gap-2">
                                {item.tech?.map((tech, index)=>{
                                    return (
                                        <div key={index} title={tech}>
                                            {techIcons(tech, 24)}
                                        </div>
                                    )
                                })}
                            </div>
                        </CardFooter>
                    </Card>

                ))
            }

        </div>

    )
}