"use client";

import { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import { motion } from "framer-motion";
import H3 from "./Typo/H3";
import Paragraph from "./Typo/Paragraph";
import Button from "./Typo/Button";
import SecondaryButton from "./UI/SecondaryButton";
import Egtajak from "./Egtajak";
import Hajlasszog from "./TetoParameterek";
import Magassag from "./Magassag";
import Cim from "./Cim";
import Akkumulator from "./Igenyek";
import Tulpanelezes from "./Tulpanelezes";
import Felhasznalas from "./Felhasznalas";
import { toast } from "sonner";
import MainButton from "./UI/MainButton";
import ImageButton from "./UI/ImageButton";
import BaseContainer from "./UI/BaseContainer"

export default function Valaszto() {
  const [rendszer, setRendszer] = useState("lakossági");

  const { currentPage, addPage, valaszto, setValaszto } =
    useContext(Context);

  const scrollToNext = (id, delay = 1000) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, delay); // Delay idő milliszekundumban
  };

  return (
    <BaseContainer title={"Válassz milyen rendszert szeretnél?"}>
        <div className="flex flex-nowrap items-center justify-center gap-8 w-full">
          <ImageButton
            onclick={() => {
              setRendszer("lakossagi"), setValaszto("Lakossági"), scrollToNext('2'), addPage('2')
            }}
            animate={valaszto === "Lakossági" ? "checked" : "initial"}
            baseImage={"/lakossagi-feher.svg"}
            hoverImage={"/lakossagi-szines.svg"}
            text={"Lakossági"}
            classname={"lg:w-[200px] w-[100px] lg:h-[200px] h-[100px]"}
          />
          <ImageButton
            onclick={() => {
              setRendszer("uzleti"), setValaszto("Üzleti"), scrollToNext('2'), addPage('2')
            }}
            animate={valaszto === "Üzleti" ? "checked" : "initial"}
            baseImage={"/uzleti-feher.svg"}
            hoverImage={"/uzleti-szines.svg"}
            text={"Üzleti"}
            classname={"lg:w-[200px] w-[100px] lg:h-[200px] h-[100px]"}
          />
        </div>
    </BaseContainer>
  );
}
