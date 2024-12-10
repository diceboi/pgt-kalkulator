import Image from "next/image"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Paragraph from "./Typo/Paragraph";

export default function Footer() {
    return(
        <div className="flex flex-col bg-[--black] border-t border-[--white-border] px-4 py-16">
            <div className="container m-auto flex lg:flex-row flex-col lg:gap-0 gap-10">

                <div className="flex flex-col gap-10 w-1/2">
                    <Image src="/pgt-white-01.svg" height={100} width={91} alt="Profi Greentech logo" className="lg:w-[91px] w-[85px] h-auto" />
                    <Paragraph>Irányítsd velünk a klímaváltozást</Paragraph>
                    <div className="flex flex-nowrap gap-4">
                        <FaFacebookF className="text-[--yellow] min-w-6 min-h-6"/>
                        <FaInstagram className="text-[--yellow] min-w-6 min-h-6"/>
                    </div>
                </div>

                <div className="flex flex-col gap-10 w-1/4">
                    <Image src="/pgt-white-01.svg" height={100} width={91} alt="Profi Greentech logo" className="lg:w-[91px] w-[85px] h-auto" />
                    <Paragraph>Irányítsd velünk a klímaváltozást</Paragraph>
                    <div className="flex flex-nowrap gap-4">
                        <FaFacebookF className="text-[--yellow] min-w-6 min-h-6"/>
                        <FaInstagram className="text-[--yellow] min-w-6 min-h-6"/>
                    </div>
                </div>
                
                <div className="flex flex-col gap-10 w-1/4">
                    <Image src="/pgt-white-01.svg" height={100} width={91} alt="Profi Greentech logo" className="lg:w-[91px] w-[85px] h-auto" />
                    <Paragraph>Irányítsd velünk a klímaváltozást</Paragraph>
                    <div className="flex flex-nowrap gap-4">
                        <FaFacebookF className="text-[--yellow] min-w-6 min-h-6"/>
                        <FaInstagram className="text-[--yellow] min-w-6 min-h-6"/>
                    </div>
                </div>

            </div>
        </div>
    )
}