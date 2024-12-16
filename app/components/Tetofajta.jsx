"use client";

import { useState, useContext } from "react";
import { Context } from "../Context";
import { motion } from "framer-motion";
import H3 from "./Typo/H3";
import SecondaryButton from "./UI/SecondaryButton";
import MainButton from "./UI/MainButton";
import ImageButton from "./UI/ImageButton";
import { toast } from "sonner";

export default function Tetofajta() {
  const [page, setPage] = useState("1");
  const { currentPage, setCurrentPage, tetofajta, setTetofajta } =
    useContext(Context);

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
    >
      <div
        className={`flex flex-col items-center lg:gap-16 gap-8 pb-8 px-4 w-full rounded-2xl`}
      >
        <H3 classname={"text-center text-white"}>
          Válaszd ki a tetőd fajtáját
        </H3>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-8">
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
              <ImageButton
                key={option}
                onclick={() => setTetofajta(option)}
                animate={tetofajta === option ? "checked" : "initial"}
                baseImage={`/tetoforma/${option}-feher.svg`}
                hoverImage={`tetoforma/${option}-szines.svg`}
                text={formattedNames[option] || option}
              />
            );
          })}
        </div>
      </div>
      <div className="sticky bottom-0 bg-[--transparent] border-t border-[--white-border] bg-opacity-5 backdrop-blur-xl p-4 flex flex-nowrap justify-center gap-4 items-center w-full">
        <SecondaryButton onclick={() => setCurrentPage("2")}>
          Vissza
        </SecondaryButton>
        <MainButton
          onclick={() => {
            if (!tetofajta) {
              toast.error("Kérjük, válaszd ki a tetőd fajtáját!");
            } else {
              setCurrentPage("4");
            }
          }}
        >
          Tovább
        </MainButton>
      </div>
    </motion.div>
  );
}
