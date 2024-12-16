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

export default function Felhasznalas() {
  const [currentHeight, setCurrentHeight] = useState(); // Default angle
  const { currentPage, setCurrentPage, setFelhasznalas, felhasznalas } =
    useContext(Context);

  return (
    <>
      <div className="flex flex-col items-center lg:gap-16 gap-8 pb-8 px-4 w-full rounded-2xl">
        <div className="flex flex-col gap-4 items-center">
          <H3 classname={"text-center text-white"}>
            Mikor használod a legtöbb áramot?
          </H3>
        </div>

        <div className="flex flex-row items-center lg:gap-16 gap-8">

          <div className="flex flex-col gap-4 items-center">
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-8">
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
                    onclick={() => setFelhasznalas(option)}
                    animate={felhasznalas === option ? "checked" : "initial"}
                    baseImage={`/felhasznalas/${option}.svg`}
                    hoverImage={`/felhasznalas/${option}.svg`}
                    text={formattedNames[option] || option}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 bg-[--transparent] border-t border-[--white-border] bg-opacity-5 backdrop-blur-xl p-4 flex flex-nowrap justify-center gap-4 items-center w-full">
        <SecondaryButton onclick={() => setCurrentPage("10")}>
          Vissza
        </SecondaryButton>
        <MainButton onclick={() => setCurrentPage("12")}>Tovább</MainButton>
      </div>
    </>
  );
}
