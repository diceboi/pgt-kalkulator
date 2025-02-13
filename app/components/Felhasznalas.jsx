"use client";

import { useState, useContext } from "react";
import { Context } from "../Context";
import H1 from "./Typo/H1";
import H2 from "./Typo/H2";
import H3 from "./Typo/H3";
import H4 from "./Typo/H4";
import Paragraph from "./Typo/Paragraph";
import Label from "./Typo/Label";
import SecondaryButton from "./UI/SecondaryButton";
import MainButton from "./UI/MainButton";
import RadioButton from "./UI/RadioButton";
import ImageButton from "./UI/ImageButton";
import { motion } from "framer-motion";
import { toast } from "sonner";
import BaseContainer from "./UI/BaseContainer";

export default function Felhasznalas({pageRef}) {
  const [currentHeight, setCurrentHeight] = useState(); // Default angle
  const { currentPage, addPage, setFelhasznalas, felhasznalas } =
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
    <BaseContainer
          title={"Mikor használod a legtöb áramot?"}
          subtitle={"Több opció is választható"}
        >

        <div className="flex flex-row items-center lg:gap-16 gap-8">
          <div className="flex flex-col gap-4 items-center">
            <div className="grid grid-cols-3 gap-8">
              {["reggel", "delben", "este"].map((option) => {
                // Mapping object for formatted names
                const formattedNames = {
                  reggel: "Reggel",
                  delben: "Délben",
                  este: "Este",
                };

                return (
                  <ImageButton
                    key={option}
                    onclick={() => {setFelhasznalas(option), addPage('12'), scrollToNext('12')}}
                    animate={felhasznalas === option ? "checked" : "initial"}
                    baseImage={`/felhasznalas/${option}-feher.svg`}
                    hoverImage={`/felhasznalas/${option}-szines.svg`}
                    text={formattedNames[option] || option}
                    classname={"lg:w-[150px] w-[100px] lg:h-[150px] h-[100px]"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </BaseContainer>
  );
}
