import Image from "next/image"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Paragraph from "./Typo/Paragraph";
import Button from "./Typo/Button";
import Link from "next/link";

export default function Footer() {
    return(
        <>
        <div className="flex flex-col bg-[--black] border-t border-[--white-border] px-4 py-16 text-white">
            <div className="container m-auto flex lg:flex-row flex-col lg:gap-0 gap-10">

                <div className="flex flex-col gap-10 w-1/2">
                    <Image src="/pgt-white-01.svg" height={100} width={91} alt="Profi Greentech logo" className="lg:w-[91px] w-[85px] h-auto" />
                    <Paragraph>Irányítsd velünk a klímaváltozást</Paragraph>
                    <div className="flex flex-nowrap gap-4">
                        <FaFacebookF className="text-[--yellow] min-w-6 min-h-6"/>
                        <FaInstagram className="text-[--yellow] min-w-6 min-h-6"/>
                    </div>
                </div>

                <div className="flex flex-col gap-8 w-1/4">
                    <Button>Gyors elérés</Button>
                    <ul className="flex flex-col gap-3">
                        <Link href="https://profigreentech.hu/termekek" className="hover:text-[--green] font-extralight"><li>Termékek</li></Link>
                        <Link href="https://profigreentech.hu/palyazatok" className="hover:text-[--green] font-extralight"><li>Pályázatok</li></Link>
                        <Link href="https://profigreentech.hu/referenciak" className="hover:text-[--green] font-extralight"><li>Referenciák</li></Link>
                        <Link href="https://profigreentech.hu/rolunk" className="hover:text-[--green] font-extralight"><li>Rólunk</li></Link>
                        <Link href="https://profigreentech.hu/profi-kisokos" className="hover:text-[--green] font-extralight"><li>Profi Kisokos</li></Link>
                        <Link href="https://profigreentech.hu/kapcsolat" className="hover:text-[--green] font-extralight"><li>Kapcsolat</li></Link>
                    </ul>
                </div>

                <div className="flex flex-col gap-8 w-1/4">
                    <Button>Kapcsolat</Button>
                    <div className="flex flex-col gap-3">
                        <Paragraph>
                            7400 Kaposvár<br></br>
                            MÁV Teherpályaudvar
                        </Paragraph>
                        <div>
                            <Paragraph>
                                E-mail: <a href="mailto:info@profigreentech.hu">info@profigreentech.hu</a>
                            </Paragraph>
                            <Paragraph>
                                Telefonszám: <a href="tel:+36 82 511 980">+36 82 511 980</a>
                            </Paragraph>
                            <Paragraph>
                                Nyitvatartás:<br></br>Hé-Cs 08:00 - 16:00, <br></br>P: 08:00 - 14:00, <br></br>Szo-V: Zárva
                            </Paragraph>  
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 py-4 bg-[#000]">
            <Paragraph classname="text-[--white-border]">Profi Greentech © 2024 Minden jog fenntartva</Paragraph>
        </div>
        </>
    )
}