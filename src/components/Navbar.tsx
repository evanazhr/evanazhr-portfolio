'use client'
import * as React from "react"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import ScaleUp from '@/components/animation/ScaleUp'
import { IoMdMoon, IoMdSunny, IoMdContact } from "react-icons/io";
import { MdHomeFilled, MdFolder, MdInfo } from "react-icons/md";
import { Button } from "@/components/ui/Button"
import { useTheme } from 'next-themes';




const ModeToggle = ({ variant }: { variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';

  return (
    <Button
      variant={variant}
      className="cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (isDark ? <IoMdSunny /> : <IoMdMoon />) : null}
    </Button>
  )
}

export default function Navbar() {

  const navbarItem: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[] = [
      {
        title: "Home",
        href: "#",
        icon: <MdHomeFilled className="text-xl" />,
      },
      {
        title: "About",
        href: "#about",
        icon: <MdInfo className="text-xl" />,
      },
      {
        title: "Project",
        href: "#project",
        icon: <MdFolder className="text-xl" />,
      },
      {
        title: "Contact",
        href: "#contact",
        icon: <IoMdContact className="text-xl" />,
      }
    ]
  return (
    <>
      <div className="px-4 hidden md:block md:px-8 container mx-auto py-2">
        <div className="flex justify-between items-center">
          <ScaleUp delay={1}>
            <a href={'#'} className="font-semibold text-xl">evanazh</a>
          </ScaleUp>
          <ul className="flex gap-2">
            {navbarItem.map((item, index) => {
              return (
                <ScaleUp key={index} delay={index}>
                  <li >
                    <a
                      className="hover:bg-primary flex items-center justify-center gap-2 rounded-md duration-300 hover:text-primary-foreground px-4 py-2"
                      href={item.href}>{item.icon}{item.title}</a>
                  </li>
                </ScaleUp>
              )
            })}

          </ul>
          <ScaleUp delay={4}>
            <ModeToggle variant={'link'} />
          </ScaleUp>
        </div>
      </div>


      {/* Nav Mobile */}

      <motion.div
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-2 md:hidden left-1/2 border-card p-2 rounded-full  border -translate-x-1/2 backdrop-blur-lg shadow-md shadow-primary">
        <div className="flex gap-2">

          {navbarItem.map((item, index) => {
            return (

              <a href={item.href} key={index} className="rounded-full hover:bg-primary p-2"
              >

                <div className=" flex items-center justify-center">
                  {item.icon}
                </div>
              </a>)
          })}

          <span
            className="rounded-full gap-2 flex items-center overflow-hidden"

          >
            <ModeToggle variant={"link"} />
          </span>


        </div>

      </motion.div>
    </>
  )
}