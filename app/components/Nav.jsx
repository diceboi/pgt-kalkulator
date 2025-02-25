"use client"

import Image from "next/image"
import H1 from "./Typo/H1"
import H2 from "./Typo/H2"
import H3 from "./Typo/H3"
import H4 from "./Typo/H4"
import Button from "./Typo/Button"
import Link from "next/link"
import { HiArrowSmLeft } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import { useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"


export default function Nav() {

    const searchParams = useSearchParams()
    const [kampany, setKampany] = useState()

    useEffect(() => {
        const kampanyParam = searchParams.get("kampany");
        if (kampanyParam.includes("fb") || kampanyParam.includes("fullblack")) {
            let kampanyValue = "";
            kampanyValue = "fb";
        } else {
            let kampanyValue = "";
            kampanyValue = "pgt"

          setKampany(kampanyValue);
          console.log("Beállított kampány érték:", kampanyValue);
        }
      }, [searchParams, setKampany]);  

    return(
        <div className="sticky top-0 flex flex-col bg-[--black] w-full h-auto border-b border-[--white-border] px-4 z-50">
            <nav className="container m-auto flex flex-nowrap gap-4 min-h-[60px] items-center justify-between">
                <Suspense>
                {kampany === "pgt" ? (
                    <Image src="/pgt-white-01.svg" height={100} width={91} alt="Profi Greentech logo" className="lg:w-[91px] w-[85px] h-auto" />
                ):(
                    <Image src="/fullblack-logo.png" height={150} width={150} alt="Fullblack logo" className="lg:w-[150px] w-[85px] h-auto" />
                )} 
                <h4 className="text-white uppercase text-center leading-5 flex-grow">Napelem kalkulátor</h4>
                
                <Link href={kampany === "pgt" ? 'https://profigreentech.hu' : 'https://fullblack.hu'}>
                    <Button classname="lg:flex hidden flex-nowrap gap-2 text-white hover:text-[--yellow] hover:underline"><HiArrowSmLeft />Vissza a főoldalra</Button>
                    <Button classname="lg:hidden flex flex-nowrap gap-2 text-white hover:text-[--yellow] hover:underline"><HiArrowSmLeft /></Button>
                </Link>
                </Suspense>
            </nav>
        </div>
    )
}