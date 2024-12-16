import Image from "next/image"
import H1 from "./Typo/H1"
import H2 from "./Typo/H2"
import H3 from "./Typo/H3"
import H4 from "./Typo/H4"
import Button from "./Typo/Button"
import Link from "next/link"
import { HiArrowSmLeft } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";


export default function Nav() {
    return(
        <div className="sticky top-0 flex flex-col bg-[--black] w-full h-auto border-b border-[--white-border] px-4 z-50">
            <nav className="container m-auto flex flex-nowrap gap-4 min-h-[60px] items-center justify-between">
                <Image src="/pgt-white-01.svg" height={100} width={91} alt="Profi Greentech logo" className="lg:w-[91px] w-[85px] h-auto" />
                <H4 classname={"text-white uppercase"}>Napelem kalkulátor</H4>
                <Link href="https://profigreentech.hu">
                    <Button classname="lg:flex hidden flex-nowrap gap-2 hover:text-[--yellow] hover:underline"><HiArrowSmLeft />Vissza a főoldalra</Button>
                </Link>
            </nav>
        </div>
    )
}