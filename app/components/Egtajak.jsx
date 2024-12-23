"use client";

import { useState, useContext } from "react";
import { Context } from "../Context";
import H3 from "./Typo/H3";
import Paragraph from "./Typo/Paragraph";
import SecondaryButton from "./UI/SecondaryButton";
import MainButton from "./UI/MainButton";
import { motion } from "framer-motion";
import BaseContainer from "./UI/BaseContainer";

export default function Egtajak() {
  const directions = [
    { name: "É", src: "/egtajak/eszak.svg" },
    { name: "ÉK", src: "/egtajak/eszakkelet.svg" },
    { name: "K", src: "/egtajak/kelet.svg" },
    { name: "DK", src: "/egtajak/delkelet.svg" },
    { name: "D", src: "/egtajak/del.svg" },
    { name: "DNy", src: "/egtajak/delnyugat.svg" },
    { name: "Ny", src: "/egtajak/nyugat.svg" },
    { name: "ÉNy", src: "/egtajak/eszaknyugat.svg" },
  ];

  const [currentDirection, setCurrentDirection] = useState(4); // Default direction index
  const { currentPage, addPage, egtaj, setEgtaj, tetofajta } =
    useContext(Context);

  const scrollToNext = (id, delay = 1000) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, delay); // Delay idő milliszekundumban
  };

  const handleChange = (e) => {
    setCurrentDirection(parseInt(e.target.value, 10));
  };

  const currentImage = directions[currentDirection]?.src || "";

  return (
    <BaseContainer
      title={"Merre néz a tetőd?"}
      subtitle={
        "A csúszkával állítsd be azt az égtájat, amerre az a tetőfelület néz, ahova a napelem rendszert telepíteni szeretnéd."
      }
    >
      {/* Image Display */}
      <div className="relative flex flex-col items-center justify-end w-full max-w-md">
        <img
          src={currentImage}
          alt={directions[currentDirection]?.name}
          draggable="false"
          className="w-[400px] h-auto"
        />s
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-md">
        <input
          type="range"
          min="0"
          max="7" // Max index for directions
          step="1"
          value={currentDirection}
          onChange={handleChange}
          onPointerUp={() => {
            addPage("7"), scrollToNext("7");
          }}
          className="w-full slider"
        />
        {/* Markers */}
        <div className="flex justify-between mt-2 text-xs text-white">
          {directions.map((direction, index) => (
            <span key={index} className="text-center">
              {direction.name}
            </span>
          ))}
        </div>
      </div>

      {/* Current Direction Display */}
      <div className="flex flex-col gap-4 items-center">
        <H3 classname={"text-center text-white"}>Aktuális égtáj:</H3>
        <p className="px-4 py-2 bg-white rounded-md text-[--black] font-bold text-2xl">
          {directions[currentDirection]?.name}
        </p>
      </div>
    </BaseContainer>
  );
}
