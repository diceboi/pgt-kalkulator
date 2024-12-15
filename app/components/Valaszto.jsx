"use client"

import { useState, useContext, useEffect } from "react"
import { Context } from "../Context"
import { motion } from "framer-motion"
import H3 from "./Typo/H3"
import Paragraph from "./Typo/Paragraph"
import Button from "./Typo/Button"
import SecondaryButton from "./UI/SecondaryButton"
MainButton
import Egtajak from "./Egtajak"
import Hajlasszog from "./Hajlasszog"
import Magassag from "./Magassag"
import Cim from "./Cim"
import Akkumulator from "./Akkumulator"
import Tulpanelezes from "./Tulpanelezes"
import Felhasznalas from "./Felhasznalas"
import { toast } from "sonner"
import MainButton from "./UI/MainButton"

export default function Valaszto() {

    const [page, setPage] = useState("1")
    const [rendszer, setRendszer] = useState("lakossági")

    const { currentPage, setCurrentPage, valaszto, setValaszto } = useContext(Context)

    const containerVariants = {
        initial: { opacity: .5, scale: 1, background: "transparent" },
        hover: { opacity: 1, scale: 1.1, background: "#ffffff" },
        checked: { opacity: 1, scale: 1.1, background: "#f0f0f0" }
    }

    const imageVariants1 = {
        initial: { scale: 1, opacity: 1, x: "-50%", y: "-50%" },
        hover: { scale: 0.95, opacity: 0, x: "-50%", y: "-60%" },
        checked: { scale: 0.95, opacity: 0, x: "-50%", y: "-60%" }
    }

    const imageVariants2 = {
        initial: { scale: 1, opacity: 0, x: "-50%", y: "-50%" },
        hover: { scale: 0.95, opacity: 1, x: "-50%", y: "-60%" },
        checked: { scale: 0.95, opacity: 1, x: "-50%", y: "-60%" }
    }

    const textVariants = {
        initial: { opacity: 1, x: "-50%", y: "0%", color: "#ffffff" },
        hover: { opacity: 1, x: "-50%", y: "0%", color: "#222" },
        checked: { opacity: 1, x: "-50%", y: "0%", color: "#222" }
    }

  return (
    <motion.div
      id="page1"
      className={`flex flex-col items-center gap-8 py-10 w-full rounded-2xl`}
    >
      <H3 classname={"text-center"}>Válassz, milyen rendszert szeretnél?</H3>
      <div className="flex flex-nowrap items-center justify-center gap-8">
        <motion.label
                className="relative border border-[white] rounded-xl w-[150px] h-[150px] cursor-pointer"
                variants={containerVariants}
                initial="initial"
                whileHover="hover"
                animate={valaszto === 'Lakossági' ? "checked" : "initial"}
            >
                <motion.input
                type="radio"
                name="system"
                value='lakossagi'
                className="hidden"
                onClick={() => {
                    setRendszer('lakossagi'); // First function
                    setValaszto('Lakossági');
                }}
                />
                {/* Image 1 */}
                <motion.img
                src={`/lakossagi-feher.svg`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-auto"
                variants={imageVariants1}
                />
                {/* Image 2 */}
                <motion.img
                src={`/lakossagi-szines.svg`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-auto"
                variants={imageVariants2}
                />
                {/* Text */}
                <motion.p
                className="text-md absolute left-1/2 bottom-2 -translate-x-1/2 font-bold text-[--white]"
                variants={textVariants}
                >
                Lakossági
                </motion.p>
            </motion.label>

            <motion.label
                className="relative border border-[white] rounded-xl w-[150px] h-[150px] cursor-pointer"
                variants={containerVariants}
                initial="initial"
                whileHover="hover"
                animate={valaszto === 'Üzleti' ? "checked" : "initial"}
            >
                <motion.input
                type="radio"
                name="system"
                value='uzleti'
                className="hidden"
                onClick={() => {
                    setRendszer('uzleti'); // First function
                    setValaszto('Üzleti');
                    console.log(valaszto)
                }}
                />
                {/* Image 1 */}
                <motion.img
                src={`/uzleti-feher.svg`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-auto"
                variants={imageVariants1}
                />
                {/* Image 2 */}
                <motion.img
                src={`/uzleti-szines.svg`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-auto"
                variants={imageVariants2}
                />
                {/* Text */}
                <motion.p
                className="text-md absolute left-1/2 bottom-2 -translate-x-1/2 font-bold text-[--white]"
                variants={textVariants}
                >
                Üzleti
                </motion.p>
            </motion.label>
      </div>
      <div className="flex flex-nowrap justify-center items-center lg:w-1/2 w-full">
        <MainButton 
        classname={""} 
        onclick={() => {
            if (!valaszto) {
                toast.error('Kérjük, válassz egy rendszert!');
            } else {
                setCurrentPage('2');
            }
        }}
        >
            Tovább
        </MainButton>
    </div>
    </motion.div>
  );
}
