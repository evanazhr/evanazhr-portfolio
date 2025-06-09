import TechIcon from '@/components/TechIcon'

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiVuedotjs } from "react-icons/si";


export default function TechIcons() {
    return (
        <div className='grid grid-cols-4 gap-2 mt-4 md:mt-8 '>
            <TechIcon name='HTML' animation-delay="">
                <IoLogoHtml5 className='size-8' />
            </TechIcon>
            <TechIcon name='CSS'>
                <IoLogoCss3 className='size-8' />
            </TechIcon>
            <TechIcon name='Javascript'>
                <IoLogoJavascript className='size-8' />
            </TechIcon>
            <TechIcon name='TailwindCSS'>
                <RiTailwindCssFill className='size-8' />
            </TechIcon>
            <TechIcon name='Typescript'>
                <BiLogoTypescript className='size-8' />
            </TechIcon>
            <TechIcon name='VueJs'>

                <SiVuedotjs className='size-8'/>
            </TechIcon>

            <TechIcon name='React'>
                <IoLogoReact className='size-8' />
            </TechIcon>
            <TechIcon name='NextJs'>

                <RiNextjsFill className='size-8' />
            </TechIcon>


        </div>
    )
}