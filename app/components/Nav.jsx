import Image from "next/image"

export default function Nav() {
    return(
        <div className="flex flex-col bg-[--black] w-full h-auto border-b border-[--white-border] px-4">
            <nav className="container m-auto flex min-h-[60px] items-center">
                <Image src="/pgt-white-01.svg" height={100} width={91} alt="Profi Greentech logo" className="lg:w-[91px] w-[85px] h-auto" />
            </nav>
        </div>
    )
}