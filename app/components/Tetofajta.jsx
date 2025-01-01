"use client";

import { useState, useContext } from "react";
import { Context } from "../Context";
import { motion } from "framer-motion";
import H3 from "./Typo/H3";
import SecondaryButton from "./UI/SecondaryButton";
import MainButton from "./UI/MainButton";
import ImageButton from "./UI/ImageButton";
import { toast } from "sonner";
import BaseContainer from "./UI/BaseContainer";

export default function Tetofajta() {
  const [page, setPage] = useState("1");
  const { currentPage, addPage, tetofajta, setTetofajta, setTetofedoanyag, setHajlaszszog, setEgtaj, setMagassag } =
    useContext(Context);

  const scrollToNext = (id, delay = 1000) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, delay); // Delay idő milliszekundumban
  };

  return (
    <BaseContainer title={"Válaszd ki a tetőd fajtáját."} subtitle={""}>
        <div className="grid lg:grid-cols-6 grid-cols-3 gap-8">
          {[
            "Nyereg",
            "Félnyereg",
            "Eltolt nyereg",
            "M forma",
            "Dobozos",
            "Dobozos 2",
            "Tagolt",
            "Manzárd",
            "Kontyolt manzárd",
            "Sátor",
            "Pillangó",
            "Előtető",
            "Oromzatos kontyolt",
            "Osztott",
            "Hajlított",
            "Szabadon álló",
            "Lapos tető",
          ].map((option) => {
            // Mapping object for formatted names
            const formattedNames = {
              "Nyereg": "Nyereg",
              "Félnyereg": "Félnyereg",
              "Eltolt nyereg": "Eltolt nyereg",
              "Lapos tető": "Lapos",
              "M forma": "M Forma",
              "Dobozos": "Dobozos",
              "Tagolt": "Tagolt",
              "Manzárd": "Manzárd",
              "Kontyolt manzárd": "Kontyolt manzárd",
              "Sátor": "Sátor",
              "Pillangó": "Pillangó",
              "Előtető": "Előtető",
              "Oromzatos kontyolt": "Oromzatos kontyolt",
              "Dobozos 2": "Dobozos 2",
              "Osztott": "Osztott",
              "Hajlított": "Hajlított",
              "Szabadon álló": "Földre"
            };

            return (
              <ImageButton
                key={option}
                onclick={() => {setTetofajta(option), addPage('5'), scrollToNext('5')}}
                animate={tetofajta === option ? "checked" : "initial"}
                baseImage={`/tetoforma/${option}-feher.svg`}
                hoverImage={`tetoforma/${option}-szines.svg`}
                text={formattedNames[option] || option}
                classname={"lg:w-[150px] w-[100px] lg:h-[150px] h-[100px]"}
              />
            );
          })}
        </div>
      </BaseContainer>
  );
}
