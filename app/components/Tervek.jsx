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
import ImageCheckbox from "./UI/ImageCheckbox"
import { motion } from "framer-motion";
import BaseContainer from "./UI/BaseContainer";

export default function Tervek() {
  const [currentHeight, setCurrentHeight] = useState(); // Default angle
  const { currentPage, addPage, tervek, setTervek, klima, setKlima, futes, setFutes } = useContext(Context);

  const scrollToNext = (id, delay = 1000) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, delay); // Delay idő milliszekundumban
  };

  const toggleTervek = (option) => {
    setTervek((prevTervek) =>
      prevTervek.includes(option)
        ? prevTervek.filter((item) => item !== option) // Remove option if already selected
        : [...prevTervek, option] // Add option if not selected
    );
  };

  return (
    <BaseContainer title={"Vannak jövőbeli terveid?"} subtitle={"Több opció is választható"}>
      <div className="flex flex-row items-center lg:gap-16 gap-8">
        <div className="flex flex-col gap-4 items-center">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
            {["elektromosauto", "hoszivattyu", "energiatarolo", "klima"].map(
              (option) => {
                // Mapping object for formatted names
                const formattedNames = {
                  elektromosauto: "Elektromos autó töltő",
                  hoszivattyu: "Fűtés korszerüsítés",
                  energiatarolo: "Energia tárolás",
                  klima: "Klíma"
                };

                return (
                  <ImageCheckbox
                  key={option}
                  onclick={() => {
                    toggleTervek(formattedNames[option]);
                  }}
                  animate={tervek.includes(formattedNames[option]) ? "checked" : "initial"}
                  baseImage={`/tervek/${option}-feher.svg`}
                  hoverImage={`/tervek/${option}-szines.svg`}
                  text={formattedNames[option] || option}
                  classname={"lg:w-[150px] w-[100px] lg:h-[150px] h-[100px]"}
                />

                );
              }
            )}
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-8">
            <div className="col-span-1 lg:w-[150px]">

            </div>
            
            <div className="col-span-1 flex flex-nowrap items-baseline gap-2 lg:w-[150px] w-full mt-4">
            {tervek.includes("Fűtés korszerüsítés") && (
              <div className="flex flex-col gap-2">
              <label htmlFor="futes" className="text-center text-white">Mekkora lakást fűtenél? (m²)</label>
              <input
                type="number"
                name="futes"
                id="futes"
                className="w-full bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
                placeholder=""
                value={futes || ""}
                onChange={(e) => {setFutes(e.target.value), console.log("Fűtés: ",futes)}}
              />
              </div>
            )}
            </div>
            
            
            <div className="col-span-1 lg:w-[150px]">

            </div>
            
            <div className="col-span-1 flex flex-nowrap items-center gap-2 lg:w-[150px] w-full my-4">
            {tervek.includes("Klíma") && (
              <div className="flex flex-col gap-2">
              <label htmlFor="klima" className="text-center text-white">Mekkora lakást klimatizálnál? (m²)</label>
              <input
                type="number"
                name="klima"
                id="klima"
                className="w-full bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
                placeholder=""
                value={klima || ""}
                onChange={(e) => {setKlima(e.target.value), console.log("Klíma: ",klima)}}
              />
              
              </div>
            )}
            </div>
            
          </div>
          
        </div>
        
      </div>
      <div className={`flex bottom-0 p-4 flex-col justify-center items-center`}>
        <MainButton
          onclick={() => {
            addPage("10"), scrollToNext("10");
          }}
          classname={"animate-bounce"}
        >
          Tovább
        </MainButton>
      </div>
    </BaseContainer>
  );
}
