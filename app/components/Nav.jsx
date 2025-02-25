"use client";

import Image from "next/image";
import Button from "./Typo/Button";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function NavComponent() {
    const searchParams = useSearchParams();
    const [kampany, setKampany] = useState("pgt");

    useEffect(() => {
        if (!searchParams) return;

        const kampanyParam = searchParams.get("kampany");
        if (kampanyParam) {
            if (kampanyParam.includes("fb") || kampanyParam.includes("fullblack")) {
                setKampany("fb");
            } else {
                setKampany("pgt");
            }
            console.log("Beállított kampány érték:", kampanyParam);
        }
    }, [searchParams]);

    return (
        <div className="sticky top-0 flex flex-col bg-[--black] w-full h-auto border-b border-[--white-border] px-4 z-50">
            <nav className="container m-auto flex flex-nowrap gap-4 min-h-[60px] items-center justify-between">
                {kampany === "pgt" ? (
                    <Image
                        src="/pgt-white-01.svg"
                        height={100}
                        width={91}
                        alt="Profi Greentech logo"
                        className="w-[91px] h-auto"
                    />
                ) : (
                    <Image
                        src="/fullblack-logo.png"
                        height={100}
                        width={150}
                        alt="Fullblack logo"
                        className="w-[150px] h-auto"
                    />
                )}
                <h4 className="text-white uppercase text-center leading-5 flex-grow">Napelem kalkulátor</h4>

                <Link href={kampany === "pgt" ? "https://profigreentech.hu" : "https://fullblack.hu"}>
                    <Button classname="lg:flex hidden flex-nowrap gap-2 text-white hover:text-[--yellow] hover:underline">
                        <HiArrowSmLeft />
                        Vissza a főoldalra
                    </Button>
                    <Button classname="lg:hidden flex flex-nowrap gap-2 text-white hover:text-[--yellow] hover:underline">
                        <HiArrowSmLeft />
                    </Button>
                </Link>
            </nav>
        </div>
    );
}

// Wrapping in Suspense to prevent build errors
export default function Nav() {
    return (
        <Suspense fallback={null}>
            <NavComponent />
        </Suspense>
    );
}
