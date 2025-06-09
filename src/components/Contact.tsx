'use client'
import { useState } from "react";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";


export default function Contact({ withName }: { withName: boolean }) {
    const [isWithName] = useState(withName)

    const contactItem = [
        {
            icon: <IoLogoGithub />,
            name: "Github",
            link: "https://github.com/evanazhr"
        },
        {
            icon: <IoLogoLinkedin />,
            name: "Linkedin",
            link: "https://linkedin.com/in/evan-azhar-hartana-151434365"
        },
        {
            icon: <IoLogoInstagram />,
            name: "Instagram",
            link: "https://www.instagram.com/evanazh/"
        }

    ]

    return (
        <>
            <div className="flex flex-row gap-4 ">
                {
                    isWithName ?
                        contactItem.map((item, index) =>
                            <a key={index} rel="noopener noreferrer" href={item.link} className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                                {item.icon}
                                <p>{item.name}</p>
                            </a>
                        )

                        : contactItem.map((item, index) =>

                            <a key={index} rel="noopener noreferrer" href={item.link} target="_blank" className="flex hover:text-primary active:text-primary gap-2 text-inherit items-center justify-center">
                                {item.icon}
                            </a>
                        )

                }
            </div>

        </>
    )
}