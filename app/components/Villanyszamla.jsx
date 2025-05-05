"use client";

import { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import { motion } from "framer-motion";
import Paragraph from "./Typo/Paragraph";
import MainButton from "./UI/MainButton";
import BaseContainer from "./UI/BaseContainer";

export default function Villanyszamla() {
  const [sliderValue, setSliderValue] = useState(0);
  const [showExtraInput, setShowExtraInput] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const {
    addPage,
    villanyszamla,
    villanyszamlaUzleti,
    villanyszamlanagy,
    setVillanyszamla,
    setVillanyszamlaUzleti,
    setVillanyszamlanagy,
    valaszto,
  } = useContext(Context);

  useEffect(() => {
    if (valaszto === "Lakossági") {
      setSliderValue(villanyszamla || 0);
    } else {
      setSliderValue(villanyszamlaUzleti || 0);
    }
  }, [valaszto, villanyszamla, villanyszamlaUzleti]);

  const handleChange = (e) => {
    const value = e.target.value;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      addPage("3");
      scrollToNext("3");
      console.log("Triggered after last keystroke:", value);
    }, 500);

    setTypingTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, [typingTimeout]);

  const scrollToNext = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  return (
    <BaseContainer
      title={
        valaszto === "Lakossági"
          ? "Mennyi a havi villanyszámlád?"
          : "Mennyi a havi villamosenergia igényed?"
      }
      subtitle={"Használd a csúszkát vagy írd be a konkrét összeget."}
    >
      <div className="flex flex-col items-center justify-center gap-8 lg:min-w-[500px] min-w-full">
        {valaszto === "Lakossági" && (
          <>
            <motion.input
              type="range"
              id="slider1"
              min="0"
              max="200000"
              value={sliderValue}
              onInput={(e) => {
                const value = Number(e.target.value);
                setSliderValue(value);
                setVillanyszamla(value);

                const percentage = (value / 200000) * 100;
                const sliderElement = e.target;
                sliderElement.style.setProperty("--value", `${percentage}%`);
                const glowIntensity = Math.min((percentage / 100) * 1, 2);
                const glowColor = `rgba(247, 200, 42, ${glowIntensity})`;
                sliderElement.style.setProperty("--thumb-glow", glowColor);

                setShowExtraInput(value === 200000);
              }}
              className="slider w-1/2"
            />

            <div className="relative flex flex-col gap-8">
              <motion.input
                type="number"
                min="0"
                max="200000"
                value={sliderValue}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^\d*$/.test(inputValue)) {
                    const newValue = Math.min(
                      Math.max(Number(inputValue), 0),
                      200000
                    );
                    setSliderValue(newValue);
                    setVillanyszamla(newValue);
                    handleChange(e);
                    setShowExtraInput(newValue === 200000);
                  }
                }}
                className="w-fit appearance-none bg-white border border-[--white-border] h-10 rounded outline-none text-center text-2xl text-[--black] py-2 pr-12"
              />
              <motion.label
                htmlFor="slider"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[--black] z-10 w-fit h-auto"
              >
                Ft/hó
              </motion.label>
            </div>
          </>
        )}

        {valaszto === "Üzleti" && (
          <>
            <motion.input
              type="range"
              id="slider2"
              min="0"
              max="50000"
              value={sliderValue}
              onInput={(e) => {
                const value = Number(e.target.value);
                setSliderValue(value);
                setVillanyszamlaUzleti(value);

                const percentage = (value / 50000) * 100;
                const sliderElement = e.target;
                sliderElement.style.setProperty("--value", `${percentage}%`);
                const glowIntensity = Math.min((percentage / 100) * 1, 2);
                const glowColor = `rgba(247, 200, 42, ${glowIntensity})`;
                sliderElement.style.setProperty("--thumb-glow", glowColor);
              }}
              className="slider w-1/2"
            />

            <div className="relative flex flex-col gap-8">
              <motion.input
                type="number"
                min="0"
                max="50000"
                value={sliderValue}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^\d*$/.test(inputValue)) {
                    const newValue = Math.min(
                      Math.max(Number(inputValue), 0),
                      50000
                    );
                    setSliderValue(newValue);
                    setVillanyszamlaUzleti(newValue);
                    handleChange(e);
                    setShowExtraInput(false); // üzletinél nincs extra input
                  }
                }}
                className="w-fit appearance-none bg-white border border-[--white-border] h-10 rounded outline-none text-center text-2xl text-[--black] py-2 pr-16"
              />
              <motion.label
                htmlFor="slider"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[--black] z-10 w-fit h-auto"
              >
                kWh/hó
              </motion.label>
            </div>
          </>
        )}

        {showExtraInput && valaszto === "Lakossági" && (
          <div className="flex flex-col gap-4 items-center py-10">
            <Paragraph classname={"text-center text-white"}>
              Ha a havi villanyszámlád nagyobb mint 200 000 Ft<br /> írd be ide
              az összeget.
            </Paragraph>
            <div className="relative flex flex-col gap-4 items-center">
              <motion.input
                id="slider200"
                name="slider200"
                type="number"
                min="0"
                max="9999999"
                className="w-fit appearance-none bg-[--antracit] border border-[--white-border] h-10 rounded outline-none text-center text-white text-2xl py-2 pr-12"
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^\d*$/.test(inputValue)) {
                    const numericValue = Number(inputValue);
                    setVillanyszamla(numericValue);
                    setVillanyszamlaUzleti("");
                    setVillanyszamlanagy("");
                    handleChange(e);
                  }
                }}
              />
              <motion.label
                htmlFor="slider"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-white z-10 w-fit h-auto"
              >
                Ft/hó
              </motion.label>
            </div>
          </div>
        )}
      </div>

      <div
        className={`${
          villanyszamla || villanyszamlaUzleti || villanyszamlanagy == null
            ? "flex"
            : "hidden"
        } bottom-0 p-4 flex-col justify-center items-center`}
      >
        <MainButton
          onclick={() => {
            if (valaszto === "Üzleti") {
              addPage("3");
              scrollToNext("3");
            } else {
              addPage("4");
              scrollToNext("4");
            }
          }}
          classname={"animate-bounce"}
        >
          Tovább
        </MainButton>
      </div>
    </BaseContainer>
  );
}
