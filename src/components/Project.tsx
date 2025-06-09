import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"

export default function Project() {
    const projectItems = [
        {
            title: "Suxz Landing Page",
            description: "UI slicing from codedesign.dev",
            id: 1,
            thumbnail: "/assets/image/gradient.png",
            link: "https://suxz-codedesign-dev.vercel.app/"
        },
        {
            title: "Kocheng Landing Page",
            description: "Landing Page untuk komunitas",
            id: 2,
            thumbnail: "/assets/image/gradient.png",
            link: "https://kocheng-green.vercel.app"
        },
        // Add more project items as needed
    ];


    return (
        <div className=" w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                projectItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden shadow-lg transition-transform transform hover:scale-105 active:scale-105 duration-300 ease-in-out">
                        <div className="relative w-full h-48">
                            <Image
                                src={item.thumbnail}
                                alt={`${item.title} project image`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <a target="_blank" href={item.link} rel="noopener noreferrer" className="text-primary hover:underline active:underline">
                                View Project
                            </a>
                        </CardFooter>
                    </Card>

                ))
            }

        </div>

    )
}