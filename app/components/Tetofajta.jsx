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
            "nyereg",
            "felnyereg",
            "eltoltnyereg",
            "mforma",
            "dobozos",
            "dobozos2",
            "tagolt",
            "manzard",
            "manzard2",
            "sator",
            "pillango",
            "elo",
            "oromzatos-kontyolt",
            "osztott",
            "hajlitott",
            "fold",
            "lapos",
          ].map((option) => {
            // Mapping object for formatted names
            const formattedNames = {
              nyereg: "Nyereg",
              felnyereg: "Félnyereg",
              eltoltnyereg: "Eltolt nyereg",
              lapos: "Lapos",
              mforma: "M Forma",
              dobozos: "Dobozos",
              tagolt: "Tagolt",
              manzard: "Manzárd",
              manzard2: "Manzárd 2",
              sator: "Sátor",
              pillango: "Pillangó",
              elo: "Elő tető",
              "oromzatos-kontyolt": "Oromzatos Kontyolt",
              dobozos2: "Dobozos 2",
              osztott: "Osztott",
              hajlitott: "Hajlított",
              fold: "Földre"
            };

            return (
              <ImageButton
                key={option}
                onclick={() => {setTetofajta(option), addPage('4'), scrollToNext('4')}}
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
