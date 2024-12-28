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

export default function Telepitesihely() {
  const [page, setPage] = useState("1");
  const { currentPage, addPage, tetofajta, telepitesihely, setTelepitesihely, setTetofajta, setTetofedoanyag, setHajlaszszog, setEgtaj, setMagassag } =
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
    <BaseContainer title={"Válaszd ki a telepítés helyét."} subtitle={""}>
        <div className="grid lg:grid-cols-6 grid-cols-3 gap-8">
          {[
            "telek",
            "parkolo",
            "csarnok",
            "nyitottszin",
            "tegla",
            "egyeb",
          ].map((option) => {
            // Mapping object for formatted names
            const formattedNames = {
              telek: "Telek",
              parkolo: "Parkoló",
              csarnok: "Könnyűszerkezetes csarnok",
              nyitottszin: "Nyitott szín",
              tegla: "Tégla- vagy pórusbeton épület",
              egyeb: "Egyéb épület"
            };

            return (
              <ImageButton
                key={option}
                onclick={() => {setTelepitesihely(option), addPage('4'), scrollToNext('4')}}
                animate={telepitesihely === option ? "checked" : "initial"}
                baseImage={`/telepiteshelye/${option}-feher.svg`}
                hoverImage={`telepiteshelye/${option}-szines.svg`}
                text={formattedNames[option] || option}
                classname={"lg:w-[150px] w-[100px] lg:h-[150px] h-[100px]"}
              />
            );
          })}
        </div>
      </BaseContainer>
  );
}
