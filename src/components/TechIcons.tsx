import ScaleUp from "@/components/animation/ScaleUp";

import Image from "next/image";

type iconType = {
  children: React.ReactNode;
  name: string;
};

function TechIcon({ children, name }: iconType) {
  return (
    <div
      className="flex flex-col items-center relative justify-center hover:text-primary border border-card group gap-2 bg-card active:text-primary active:shadow-md active:shadow-primary  aspect-square p-10 rounded-md shadow-md hover:bg-card duration-300 hover:text-card hover:border-card hover:shadow-md hover:shadow-primary "
      title={name}
    >
      {children}
      <p className="group-hover:opacity-100 group-active:opaciity-100 duration-300 opacity-0 text-center bottom-2 font-semibold text-sm absolute">
        {name}
      </p>
    </div>
  );
}

export default function TechIcons() {
  const techIconItem = [
    {
      name: "HTML",
      icon: "/assets/icons/html-5.svg",
    },
    {
      name: "CSS",
      icon: "/assets/icons/css-3.svg",
    },
    {
      name: "Javascript",
      icon: "/assets/icons/javascript.svg",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/icons/tailwind-css.svg",
    },
    {
      name: "Typescript",
      icon: "/assets/icons/typescript.svg",
    },
    {
      name: "VueJs",
      icon: "/assets/icons/vue.svg",
    },
    {
      name: "React",
      icon: "/assets/icons/react.svg",
    },
    {
      name: "NextJs",
      icon: "/assets/icons/next-js.svg",
    },
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4 md:mt-8 ">
      {techIconItem.map((item, index) => (
        <ScaleUp key={index} delay={index}>
          <TechIcon name={item.name}>
            <Image
              src={item.icon}
              width={30}
              height={30}
              alt={item.name}
              className="size-full"
            />
          </TechIcon>
        </ScaleUp>
      ))}
    </div>
  );
}
