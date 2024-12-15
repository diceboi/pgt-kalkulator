"use client";

import { useState, useContext } from "react";
import { Context } from "../Context";
import { motion } from "framer-motion";
import H3 from "./Typo/H3";
import Paragraph from "./Typo/Paragraph";
import Button from "./Typo/Button";
import SecondaryButton from "./UI/SecondaryButton";
import MainButton from "./UI/MainButton";
import Egtajak from "./Egtajak";
import Hajlasszog from "./Hajlasszog";
import Magassag from "./Magassag";
import Cim from "./Cim";
import Akkumulator from "./Akkumulator";
import Tulpanelezes from "./Tulpanelezes";
import Felhasznalas from "./Felhasznalas";
import { toast } from "sonner";

export default function Tetofajta() {
    const [page, setPage] = useState("1")
    const [tetoforma, setTetoforma] = useState("")
    const {currentPage, setCurrentPage, tetofajta, setTetofajta} = useContext(Context)

  const containerVariants = {
    initial: { opacity: 0.5, scale: 1, background: "transparent" },
    hover: { opacity: 1, scale: 1.1, background: "#ffffff" },
    checked: { opacity: 1, scale: 1.1, background: "#f0f0f0" },
  };

  const imageVariants1 = {
    initial: { scale: 1, opacity: 1, x: "-50%", y: "-50%" },
    hover: { scale: 0.95, opacity: 0, x: "-50%", y: "-60%" },
    checked: { scale: 0.95, opacity: 0, x: "-50%", y: "-60%" },
  };

  const imageVariants2 = {
    initial: { scale: 1, opacity: 0, x: "-50%", y: "-50%" },
    hover: { scale: 0.95, opacity: 1, x: "-50%", y: "-60%" },
    checked: { scale: 0.95, opacity: 1, x: "-50%", y: "-60%" },
  };

  const textVariants = {
    initial: { opacity: 1, x: "-50%", y: "0%", color: "#ffffff" },
    hover: { opacity: 1, x: "-50%", y: "0%", color: "#222" },
    checked: { opacity: 1, x: "-50%", y: "0%", color: "#222" },
  };

  return (
    <motion.div
      id="page3"
      className={`flex flex-col items-center justify-between gap-8 ${
        page === "3" ? "bg-[--white-bg]" : ""
      } rounded-2xl py-10 w-full`}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
    >
      <H3>Válaszd ki a tetőd fajtáját</H3>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
        {[
          "nyereg",
          "felnyereg",
          "sodobozos",
          "lapos",
          "mforma",
          "dobozos",
          "tagolt",
          "manzard",
          "manzard2",
          "sator",
          "pillango",
          "elo",
          "oromzatos-kontyolt",
          "dobozos2",
          "osztott",
          "hajlitott",
        ].map((option) => {
          // Mapping object for formatted names
          const formattedNames = {
            nyereg: "Nyereg",
            felnyereg: "Félnyereg",
            sodobozos: "Sodódozos",
            lapos: "Lapos",
            mforma: "M Forma",
            dobozos: "Dobozos",
            tagolt: "Tagolt",
            manzard: "Manzárd",
            manzard2: "Manzárd 2",
            sator: "Sátor",
            pillango: "Pillangó",
            elo: "Elő",
            "oromzatos-kontyolt": "Oromzatos Kontyolt",
            dobozos2: "Dobozos 2",
            osztott: "Osztott",
            hajlitott: "Hajlított",
          };

          return (
            <motion.label
              key={option}
              className="relative border border-[white] rounded-xl w-[200px] h-[200px] cursor-pointer"
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
              animate={tetofajta === option ? "checked" : "initial"}
            >
              <motion.input
                type="radio"
                name="system"
                value={option}
                className="hidden"
                onClick={() => {
                  setTetofajta(option); // Update state with the selected option
                }}
              />
              {/* Image 1 */}
              <motion.img
                src={`/tetoforma/${option}-feher.svg`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                variants={imageVariants1}
              />
              {/* Image 2 */}
              <motion.img
                src={`tetoforma/${option}-szines.svg`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                variants={imageVariants2}
              />
              {/* Text */}
              <motion.p
                className="text-md absolute left-1/2 bottom-2 -translate-x-1/2 font-bold text-[--black]"
                variants={textVariants}
              >
                {formattedNames[option] || option}{" "}
                {/* Display formatted name or fallback */}
              </motion.p>
            </motion.label>
          );
        })}
      </div>
      <div className="flex flex-nowrap justify-between items-center lg:w-1/2 w-full">
        <SecondaryButton onclick={() => setCurrentPage("2")}>Vissza</SecondaryButton>
        <MainButton onclick={() => {
            if (!tetofajta) {
                toast.error('Kérjük, válaszd ki a tetőd fajtáját!');
            } else {
                setCurrentPage('4');
            }
        }}>Tovább</MainButton>
      </div>
    </motion.div>
  );
}
