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
import Hajlasszog from "./TetoParameterek";
import Magassag from "./Magassag";
import Cim from "./Cim";
import Akkumulator from "./Igenyek";
import Tulpanelezes from "./Tulpanelezes";
import Felhasznalas from "./Felhasznalas";
import { toast } from "sonner";
import SendWebhook from "./SendWebhook";
import ImageButton from "./UI/ImageButton";
import BaseContainer from "./UI/BaseContainer";

export default function Tetofedoanyag({}) {
  const [page, setPage] = useState("1");
  const [tetoforma, setTetoforma] = useState("");
  const { currentPage, addPage, tetofedoanyag, setTetofedoanyag } =
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
    <BaseContainer title={"Válaszd ki a tetőfedő anyag fajtáját."} subtitle={""}>
        <div className="grid lg:grid-cols-6 grid-cols-3 gap-8">
          {[
            "bitumenes",
            "zsindely",
            "cserepeslemez",
            "kozuzalekos-cserepeslemez",
            "trapezlemez",
            "korcolt",
            "hodfarku-keramia",
            "hornyolt-keramia",
            "profilos-keramia",         
            "profilos-beton",
            "sik-beton",
            "sikpala",
            "hullam",
          ].map((option) => {
            // Mapping object for formatted names
            const formattedNames = {
              bitumenes: "Bitumenes lemez",
              cserepeslemez: "Cserepeslemez",
              "hodfarku-keramia": "Hódfarkú kerámiacserép",
              "hornyolt-keramia": "Hornyolt kerámiacserép",
              hullam: "Hullámpala",
              korcolt: "Korcolt lemez",
              "kozuzalekos-cserepeslemez": "Kőzúzalékos cserepeslemez",
              "profilos-beton": "Profilos betoncserép",
              "profilos-keramia": "Profilos kerámiacserép",
              "sik-beton": "Sík betoncserép",
              sikpala: "Síkpala",
              trapezlemez: "Trapézlemez",
              zsindely: "Zsindely",
            };

            return (
              <ImageButton
                key={option}
                onclick={() => {setTetofedoanyag(formattedNames[option]), addPage('6'), scrollToNext('6')}}
                animate={tetofedoanyag === formattedNames[option] ? "checked" : "initial"}
                baseImage={`/tetofedoanyag/${option}-feher.svg`}
                hoverImage={`tetofedoanyag/${option}-szines.svg`}
                text={formattedNames[option] || option}
                classname={"lg:w-[150px] w-[100px] lg:h-[150px] h-[100px]"}
              />
            );
          })}
        </div>
      </BaseContainer>
  );
}
