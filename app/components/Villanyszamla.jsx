"use client";

import { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import { motion } from "framer-motion";
import H3 from "./Typo/H3";
import Paragraph from "./Typo/Paragraph";
import Button from "./Typo/Button";
import SecondaryButton from "./UI/SecondaryButton";
import MainButton from "./UI/MainButton"
import Egtajak from "./Egtajak";
import Hajlasszog from "./Hajlasszog";
import Magassag from "./Magassag";
import Cim from "./Cim";
import Akkumulator from "./Akkumulator";
import Tulpanelezes from "./Tulpanelezes";
import Felhasznalas from "./Felhasznalas";

export default function Villanyszamla() {
    const [page, setPage] = useState("1")
    const [sliderValue, setSliderValue] = useState()
    const [showExtraInput, setShowExtraInput] = useState(false)
    const { currentPage, setCurrentPage, villanyszamla, villanyszamlanagy, setVillanyszamla, setVillanyszamlanagy } = useContext(Context)

    useEffect(() => {
      setSliderValue(villanyszamla); // Sync slider value with context
    });

  return (
    <motion.div
      id="page2"
      className={`flex flex-col items-center justify-between gap-8 rounded-2xl min-h-[50vh] w-full`}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
    >
      <div className="flex flex-col gap-4 items-center">
        <H3 classname={"text-center"}>Mennyi a havi villanyszámlád?</H3>
        <Paragraph classname={"text-center"}>
          Használd a csúszkát vagy írd be a konkrét összeget.
        </Paragraph>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 lg:min-w-[500px] min-w-full">
        {/* Slider */}
        <motion.input
          type="range"
          id="slider"
          min="0"
          max="200000"
          value={sliderValue}
          onChange={(e) => {
            const value = Number(e.target.value);
            setSliderValue(value);
            setVillanyszamla(value)

            // Calculate the percentage and update the CSS variable
            const percentage = (value / 200000) * 100; // Assuming 200000 is the max value
            const sliderElement = e.target;
            sliderElement.style.setProperty("--value", `${percentage}%`);

            // Calculate dynamic glow intensity
            const glowIntensity = Math.min((percentage / 100) * 1, 2); // Scale glow intensity (0 to 1)
            const glowColor = `rgba(247, 200, 42, ${glowIntensity})`;

            // Update CSS variable for thumb glow
            sliderElement.style.setProperty("--thumb-glow", glowColor);

            // Show extra input
            if (value === 200000) {
              setShowExtraInput(true); // Show extra input if slider reaches max
            } else {
              setShowExtraInput(false); // Hide extra input otherwise
            }
          }}
          className="slider w-1/2"
        />

        {/* Input Field */}
        <div className="relative flex flex-col gap-8">
          <motion.input
            type="number"
            min="0"
            max="200000"
            value={sliderValue}
            onChange={(e) => {
              const newValue = Math.min(
                Math.max(Number(e.target.value), 0),
                200000
              );
              setSliderValue(newValue);
              setVillanyszamla(newValue)

              if (newValue === 200000) {
                setShowExtraInput(true);
              } else {
                setShowExtraInput(false);
              }
            }}
            className="w-fit appearance-none bg-white border border-[--white-border] h-10 rounded outline-none text-center text-2xl text-[--black] py-2 px-8"
          />
          <motion.label
            htmlFor="slider"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[--black] z-10 w-fit h-auto"
          >
            Ft
          </motion.label>
        </div>

        {/* Render dynamically based on `showExtraInput` */}
        {showExtraInput && (
          <>
            <div className="flex flex-col gap-4 items-center py-10">
              <Paragraph classname={"text-center"}>
                Ha a havi villanyszmlád nagyobb mint 200 000 Ft<br></br> írd be
                ide az összeget.
              </Paragraph>
              <div className="relative flex flex-col gap-4 items-center">
                <motion.input
                  id="slider200"
                  name="slider200"
                  type="number"
                  min="0"
                  max="9999999"
                  className="w-fit appearance-none bg-[--antracit] border border-[--white-border] h-10 rounded outline-none text-center text-2xl py-2 px-8"
                />
                <motion.label
                  htmlFor="slider"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-white z-10 w-fit h-auto"
                >
                  Ft
                </motion.label>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-nowrap justify-between items-center lg:w-1/2 w-full">
        <SecondaryButton onclick={() => setCurrentPage("1")}>Vissza</SecondaryButton>
        <MainButton onclick={() => setCurrentPage("3")}>Tovább</MainButton>
      </div>
    </motion.div>
  );
}
