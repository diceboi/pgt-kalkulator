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
import { motion } from "framer-motion";

export default function Hajlasszog({pageRef}) {
  const angles = [
    { value: 5, src: "/hajlasszog/5fok.svg" },
    { value: 10, src: "/hajlasszog/10fok.svg" },
    { value: 15, src: "/hajlasszog/15fok.svg" },
    { value: 20, src: "/hajlasszog/20fok.svg" },
    { value: 25, src: "/hajlasszog/25fok.svg" },
    { value: 30, src: "/hajlasszog/30fok.svg" },
    { value: 35, src: "/hajlasszog/35fok.svg" },
    { value: 40, src: "/hajlasszog/40fok.svg" },
    { value: 45, src: "/hajlasszog/45fok.svg" },
    { value: 50, src: "/hajlasszog/50fok.svg" },
    { value: 55, src: "/hajlasszog/55fok.svg" },
  ];

  const [currentAngle, setCurrentAngle] = useState(35); // Default angle
  const { currentPage, setCurrentPage, hajlasszog, setHajlaszszog } =
    useContext(Context);

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (e) => {
    setCurrentAngle(parseInt(e.target.value, 10));
  };

  const currentImage =
    angles.find((angle) => angle.value === currentAngle)?.src || "";

  return (
    <motion.div
      id="page3"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      className="w-full lg:min-h-[78vh] min-h-[85vh] flex flex-col justify-between"
    >
      <div className="flex flex-col items-center justify-center lg:gap-16 gap-8 pb-8 px-4 w-full rounded-2xl flex-grow">
        <div className="flex flex-col gap-4 items-center">
          <H3 classname={"text-center text-white"}>
            Mekkora a tetőd hajlásszöge?
          </H3>
          <Paragraph classname={"text-center text-white"}>
            A csúszkával válaszd ki a tetőd hajlásszögét
          </Paragraph>
        </div>

        <div className="relative flex flex-col items-center justify-end w-full max-w-md min-h-[250px]">
          {/* Display the current image */}
          <img
            src={currentImage}
            alt={`Roof angle ${currentAngle}°`}
            draggable="false"
            className="w-[200px] h-auto "
          />
        </div>

        {/* Slider */}
        <div className="relative w-full max-w-md">
          <input
            type="range"
            min="5"
            max="55"
            step="5"
            value={currentAngle}
            onChange={handleChange}
            className="w-full slider"
          />
          {/* Markers */}
          <div className="flex justify-between mt-2 text-xs text-white">
            {angles.map((angle) => (
              <span key={angle.value} className="text-center">
                {angle.value}°
              </span>
            ))}
          </div>
        </div>

        {/* Display the current angle */}
        <div className="flex flex-col gap-4 items-center">
          <H3 classname={"text-white text-center"}>Tető hajlásszög: </H3>
          <p className="px-4 py-2 bg-white rounded-md text-[--black] font-bold text-2xl">
            {currentAngle}°
          </p>
        </div>
      </div>
      <div className="sticky bottom-0 bg-[--transparent] border-t border-[--white-border] bg-opacity-5 backdrop-blur-xl p-4 flex flex-nowrap justify-center gap-4 items-center w-full">
        <SecondaryButton onclick={() => {setCurrentPage("4"), scrollToTop()}}>
          Vissza
        </SecondaryButton>
        <MainButton onclick={() => {setCurrentPage("6"), scrollToTop()}}>Tovább</MainButton>
      </div>
    </motion.div>
  );
}
