'use client'
import { useState } from "react";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { RiDiscordFill } from "react-icons/ri";


export default function Contact({ withName }: { withName: boolean }) {
    const [isWithName, setIsWithName] = useState(withName)
    return (
        <>
            {
                isWithName ? <div className="flex flex-row gap-4 ">
                    <a href="#" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                        <IoLogoGithub />
                        <p>Github</p>
                    </a>
                    <a href="#" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">

                        <IoLogoLinkedin />
                        <p>Linkedin</p>
                    </a>
                    <a href="#" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                        <IoLogoInstagram />
                        <p>Instagram</p>
                    </a>
                    <a href="#" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                        <RiDiscordFill />
                        <p>Discord</p>

                    </a>


                </div> : <div className="flex flex-row gap-4 ">
                    <a href="https://github.com/evanazhr" target="_blank" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                        <IoLogoGithub />
                    </a>
                    <a href="www.linkedin.com/in/evan-azhar-hartana-151434365" target="_blank" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">

                        <IoLogoLinkedin />
                    </a>
                    <a href="https://www.instagram.com/evanazh/" target="_blank" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                        <IoLogoInstagram />
                    </a>
                  


                </div>}

        </>
    )
}