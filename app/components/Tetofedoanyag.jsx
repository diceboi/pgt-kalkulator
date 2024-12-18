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
import SendWebhook from "./SendWebhook";
import ImageButton from "./UI/ImageButton";

export default function Tetofedoanyag({pageRef}) {
  const [page, setPage] = useState("1");
  const [tetoforma, setTetoforma] = useState("");
  const { currentPage, setCurrentPage, tetofedoanyag, setTetofedoanyag } =
    useContext(Context);

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      className="w-full lg:min-h-[78vh] min-h-[85vh] flex flex-col justify-between"
    >
      <div
        className={`flex flex-col items-center justify-center lg:gap-16 gap-8 pb-8 px-4 w-full rounded-2xl flex-grow`}
      >
        <H3 classname={"text-center text-white"}>
          Válaszd ki a tetőfedő anyagod fajtáját
        </H3>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
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
              <ImageButton
                key={option}
                onclick={() => setTetofedoanyag(option)}
                animate={tetofedoanyag === option ? "checked" : "initial"}
                baseImage={`/tetofedoanyag/${option}-feher.svg`}
                hoverImage={`tetofedoanyag/${option}-szines.svg`}
                text={formattedNames[option] || option}
              />
            );
          })}
        </div>
      </div>
      <div className="sticky bottom-0 bg-[--transparent] border-t border-[--white-border] bg-opacity-5 backdrop-blur-xl p-4 flex flex-nowrap justify-center gap-4 items-center w-full">
        <SecondaryButton onclick={() => {setCurrentPage("3"), scrollToTop()}}>
          Vissza
        </SecondaryButton>
        <MainButton
          onclick={() => {
            if (!tetofedoanyag) {
              toast.error("Kérjük, válaszd ki a tetőfedő anyag típusát!");
            } else {
              setCurrentPage("5");
              scrollToTop()
            }
          }}
        >
          Tovább
        </MainButton>
      </div>
    </motion.div>
  );
}
