'use client'
import { useState } from "react";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";


export default function Contact({ withName }: { withName: boolean }) {
    const [isWithName] = useState(withName)
    return (
        <>
            {
                isWithName ? <div className="flex flex-row gap-4 ">
                    <a rel="noopener noreferrer" href="#" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                        <IoLogoGithub />
                        <p>Github</p>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">

                        <IoLogoLinkedin />
                        <p>Linkedin</p>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                        <IoLogoInstagram />
                        <p>Instagram</p>
                    </a>
                 


                </div> : <div className="flex flex-row gap-4 ">
                    <a rel="noopener noreferrer" href="https://github.com/evanazhr" target="_blank" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                        <IoLogoGithub />
                    </a>
                    <a rel="noopener noreferrer" href="www.linkedin.com/in/evan-azhar-hartana-151434365" target="_blank" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">

                        <IoLogoLinkedin />
                    </a>
                    <a rel="noopener noreferrer" href="https://www.instagram.com/evanazh/" target="_blank" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                        <IoLogoInstagram />
                    </a>
                  


                </div>}

        </>
    )
}