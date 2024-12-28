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

export default function Igenyek() {
  const {
    currentPage,
    addPage,
    setAkkumulator,
    akkumulator,
    setTulpanelezes,
    tulpanelezes,
  } = useContext(Context);

  const scrollToNext = (id, delay = 1000) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, delay); // Delay idő milliszekundumban
  };

  return (
    <BaseContainer title={"Speciális igények"} subtitle={""}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-end">
        <div id="akkumulator" className="flex flex-col lg:gap-16 gap-8 justify-between">
          <H4 classname={"text-center text-white"}>
            Szeretnél akkumulátort a rendszerhez?
          </H4>
          <div className="flex lg:flex-col flex-row items-center justify-center gap-8">
            <div className="relative flex flex-col items-center justify-end max-w-md">
              <img
                src="/akkumulator/akkumulator.svg"
                alt={`Akkumulátor`}
                className="lg:w-[150px] w-[125px] h-auto"
              />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
                {["Igen  szeretnék akkumulátort", "Nem szeretnék akkumulátort"].map((option) => {
                  // Mapping object for formatted names
                  const formattedNames = {
                    "Igen  szeretnék akkumulátort": "Igen",
                    "Nem szeretnék akkumulátort": "Nem",
                  };

                  return (
                    <RadioButton
                      key={option}
                      onclick={() => setAkkumulator(option)}
                      animate={akkumulator === option ? "checked" : "initial"}
                      text={formattedNames[option] || option}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div id="tulpanelezes" className="flex flex-col lg:gap-16 gap-8">
          <div className="flex flex-col gap-2">
            <H4 classname={"text-center text-white"}>
              Szeretnéd túlpanelezni a rendszert?
            </H4>
            <Paragraph classname={"text-center text-white"}>
              A rendszer jobb teljesítménye miatt akár +20%-kal is több napelem
              kerülhet a tetőre.
            </Paragraph>
          </div>

          <div className="flex lg:flex-col flex-row items-center justify-center gap-8">
            <div className="relative flex flex-col items-center justify-end max-w-md">
              <img
                src="/tulpanelezes/tulpanelezes.svg"
                alt={`Túlpanelezés`}
                className="lg:w-[150px] w-[125px] h-auto"
              />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
                {["igen  20%-kal", "nem"].map((option) => {
                  // Mapping object for formatted names
                  const formattedNames = {
                    "igen  20%-kal": "Igen",
                    nem: "Nem",
                  };

                  return (
                    <RadioButton
                      key={option}
                      onclick={() => setTulpanelezes(option)}
                      animate={tulpanelezes === option ? "checked" : "initial"}
                      text={formattedNames[option] || option}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          akkumulator && tulpanelezes ? "flex" : "hidden"
        } bottom-0 p-4 flex-col justify-center items-center`}
      >
        <MainButton
          onclick={() => {
            addPage("9"), scrollToNext("9");
          }}
          classname={"animate-bounce"}
        >
          Tovább
        </MainButton>
      </div>
    </BaseContainer>
  );
}
