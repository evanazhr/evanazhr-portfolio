
type iconType = {
    children: React.ReactNode;
    name: string
}

export default function TechIcon({ children, name }: iconType) {
    return (
        <div className="flex flex-col items-center relative justify-center hover:text-primary border border-card group gap-2 bg-card active:text-primary active:shadow-md active:shadow-primary   p-10 rounded-md shadow-md hover:bg-card duration-300 hover:text-card hover:border-card hover:shadow-md hover:shadow-primary " title={name}>
            {children}
            <p className="group-hover:opacity-100 duration-300 opacity-100 text-center bottom-2 font-semibold text-sm absolute">{name}</p>
        </div>
    )
}