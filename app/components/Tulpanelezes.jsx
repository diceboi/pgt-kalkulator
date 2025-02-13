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
import { motion } from "framer-motion";
import { toast } from "sonner";
import BaseContainer from "./UI/BaseContainer";

export default function Tulpanelezes() {
  const [currentHeight, setCurrentHeight] = useState(); // Default angle
  const { currentPage, addPage, setTulpanelezes, tulpanelezes } =
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
      title={"Szeretnéd túlpanelezni a rendszert?"}
      subtitle={
        "A rendszer jobb teljesítménye miatt akár +20%-kal is több napelem kerülhet a tetőre."
      }
    >
      <div className="flex flex-row items-center lg:gap-16 gap-8">
        <div className="relative flex flex-col items-center justify-end w-full max-w-md">
          <img
            src="/tulpanelezes/tulpanelezes.svg"
            alt={`Túlpanelezés`}
            className="lg:w-[200px] w-[125px] h-auto"
          />
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-8">
            {["igen", "nem"].map((option) => {
              // Mapping object for formatted names
              const formattedNames = {
                igen: "Igen",
                nem: "Nem",
              };

              return (
                <RadioButton
                  key={option}
                  onclick={() => {
                    setTulpanelezes(option),
                      addPage("11"),
                      scrollToNext("11");
                  }}
                  animate={tulpanelezes === option ? "checked" : "initial"}
                  text={formattedNames[option] || option}
                />
              );
            })}
          </div>
        </div>
      </div>
    </BaseContainer>
  );
}
