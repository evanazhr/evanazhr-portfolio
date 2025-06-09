'use client'
import * as React from "react"
import { useTheme } from "next-themes"

import { IoMdMoon, IoMdSunny,IoMdContact } from "react-icons/io";

import { MdHomeFilled, MdFolder, MdInfo } from "react-icons/md";


import { Button } from "@/components/ui/Button"



const ModeToggle = ({variant}: {variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined}) => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Gunakan `resolvedTheme` agar kita tahu tema yang sedang aktif (termasuk saat "system")
  const isDark = resolvedTheme === "dark"

  return (
    <Button
    variant={variant}
      className="cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <IoMdSunny /> : <IoMdMoon />}
    </Button>
  )
}

export default function Navbar() {
  return (
    <>
      <div className="px-4 hidden md:block md:px-8 container mx-auto py-2">
        <div className="flex justify-between items-center">
          <a href={'#'} className="font-semibold text-xl">evanazh</a>
          <ul className="flex gap-2">
            <li>
              <a
                className="hover:bg-primary flex items-center justify-center gap-2 rounded-md duration-300 hover:text-primary-foreground px-4 py-2"
                href={'#'}><MdHomeFilled/>Home</a>
            </li>
            <li>
              <a
                className="hover:bg-primary flex items-center justify-center gap-2 rounded-md duration-300 hover:text-primary-foreground px-4 py-2"
                href={'#about'}><MdInfo/>About</a>
            </li>
            <li>
              <a
                className="hover:bg-primary flex items-center justify-center gap-2 rounded-md duration-300 hover:text-primary-foreground px-4 py-2"
                href={'#project'}><MdFolder/>Project</a>
            </li>
            <li>
              <a
                className="hover:bg-primary flex items-center justify-center gap-2 rounded-md duration-300 hover:text-primary-foreground px-4 py-2"
                href={'#contact'}><IoMdContact/>Contact</a>
            </li>


          </ul>
          <ModeToggle variant={'link'} />
        </div>
      </div>

      <div className="absolute bottom-2 md:hidden left-1/2 border-card p-2 rounded-full  border -translate-x-1/2 backdrop-blur-lg shadow-md shadow-primary">
        <div className="flex gap-2">

          <a href={'#'} className="rounded-full hover:bg-primary p-2"
          >

            <MdHomeFilled className="size-6" />
          </a>
          <a href={'#about'}
            className="rounded-full hover:bg-primary p-2"
          >

            <MdInfo className="size-6" />
          </a>
          <a href={'#project'} className="rounded-full hover:bg-primary p-2"
          >

            <MdFolder className="size-6" />
          </a>
          
          <a href={'#contact'} className="rounded-full hover:bg-primary p-2"
          >

            <IoMdContact className="size-6" />

          </a>
          <span
            className="rounded-full gap-2 flex items-center overflow-hidden"

          >
            <ModeToggle variant={"link"}/>
          </span>


        </div>

      </div>
    </>
  )
}