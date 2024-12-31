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
            "bitumenes-hullam",
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
            "termespala",
            "polikarbonat",
            "egyeb",
            "hullam",
          ].map((option) => {
            // Mapping object for formatted names
            const formattedNames = {
              bitumenes: "Bitumenes zsindely",
              "bitumenes-hullam": "Bitumenes hullámlemez", 
              cserepeslemez: "Fémlemez fedés - cserepes lemez",
              "hodfarku-keramia": "Kerámia cserép - hódfarkú vagy hornyolt",
              "hornyolt-keramia": "Kerámia cserép - profilos  sajtolt",
              hullam: "Pala - hullámpala",
              korcolt: "Fémlemez fedés - korcolt lemez",
              "kozuzalekos-cserepeslemez": "Fémlemez fedés - kőzúzalékos cserepes lemez",
              "profilos-beton": "Betoncserép - sík vagy hullámos",
              "profilos-keramia": "Profilos kerámiacserép",
              "sik-beton": "Betoncserép - sík vagy hullámos",
              sikpala: "Pala - sík 40x40-es vagy kettős fedés",
              termespala: "Pala - terméspala fedés", //
              polikarbonat: "Polikarbonát fedés", //
              egyeb: "Egyéb", //
              trapezlemez: "Fémlemez fedés - trapézlemez",
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
