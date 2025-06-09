import TechIcon from '@/components/TechIcon'

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";


export default function TechIcons() {

    const techIconItem = [
        {
            name: 'HTML',
            icon: <IoLogoHtml5 className='size-8' />
        },
        {
            name: 'CSS',
            icon: <IoLogoCss3 className='size-8' />
        },
        {
            name: 'Javascript',
            icon: <SiJavascript className='size-8' />
        },
        {
            name: 'TailwindCSS',
            icon: <RiTailwindCssFill className='size-8' />
        },
        {
            name: 'Typescript',
            icon: <SiTypescript className='size-8' />
        },
        {
            name: 'VueJs',
            icon: <SiVuedotjs className='size-8' />
        },
        {
            name: 'React',
            icon: <IoLogoReact className='size-8' />
        },
        {
            name: 'NextJs',
            icon: <RiNextjsFill className='size-8' />
        },

    ]

    return (
        <div className='grid grid-cols-4 gap-2 mt-4 md:mt-8 '>
            {techIconItem.map((item, index) => (
                <TechIcon key={index} name={item.name}>
                    {item.icon}
                </TechIcon>
            ))}


        </div>
    )
}