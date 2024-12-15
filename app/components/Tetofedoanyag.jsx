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
import SendWebhook from "./SendWebhook"

export default function Tetofedoanyag() {
    const [page, setPage] = useState("1")
    const [tetoforma, setTetoforma] = useState("")
    const {currentPage, setCurrentPage, tetofedoanyag, setTetofedoanyag} = useContext(Context)

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
      <H3>Válaszd ki a tetőfedő anyagod fajtáját</H3>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
        {[
          "bitumenes",
          "cserepeslemez",
          "hodfarku-keramia",
          "hornyolt-keramia",
          "hullam",
          "korcolt",
          "kozuzalekos-cserepeslemez",
          "profilos-beton",
          "profilos-keramia",
          "sik-beton",
          "sikpala",
          "trapezlemez",
          "zsindely",
        ].map((option) => {
          // Mapping object for formatted names
          const formattedNames = {
            bitumenes: "Bitumenes lemez",
            cserepeslemez: "Cserepeslemez",
            hodfarku: "Hódfarkú kerámiacserép",
            "honyolt-keramia": "Hornyolt kerámiacserép",
            hullam: "Hullámpala",
            korcolt: "Korcolt lemez",
            "kozuzalekos-cserepeslemez": "Kőzúzalékos cserepeslemez",
            "profilos-beton": "Profilos betoncserép",
            "profilos-keramia": "Profilos kerámiacserép",
            "sik-beton": "Sík betoncserép",
            sikpala: "Síkpala",
            tapezlemez: "Trapézlemez",
            zsindely: "Zsindely",
          };

          return (
            <motion.label
              key={option}
              className="relative border border-[white] rounded-xl w-[200px] h-[200px] cursor-pointer"
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
              animate={tetofedoanyag === option ? "checked" : "initial"}
            >
              <motion.input
                type="radio"
                name="system"
                value={option}
                className="hidden"
                onClick={() => {
                  setTetofedoanyag(option); // Update state with the selected option
                }}
              />
              {/* Image 1 */}
              <motion.img
                src={`/tetofedoanyag/${option}-feher.svg`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                variants={imageVariants1}
              />
              {/* Image 2 */}
              <motion.img
                src={`tetofedoanyag/${option}-szines.svg`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                variants={imageVariants2}
              />
              {/* Text */}
              <motion.p
                className="text-md absolute left-1/2 bottom-2 -translate-x-1/2 font-bold text-[--black] text-center"
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
        <SecondaryButton onclick={() => setCurrentPage("3")}>Vissza</SecondaryButton>
        <MainButton onclick={() => {
            if (!tetofedoanyag) {
                toast.error('Kérjük, válaszd ki a tetőfedő anyag típusát!');
            } else {
                setCurrentPage('5');
            }
        }}>Tovább</MainButton>
      </div>
      <SendWebhook />
    </motion.div>
  );
}
