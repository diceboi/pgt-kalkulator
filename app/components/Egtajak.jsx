"use client";

import { useState } from "react";
import H3 from "./Typo/H3";
import Paragraph from "./Typo/Paragraph";
import SecondaryButton from "./UI/SecondaryButton";

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

  const [currentDirection, setCurrentDirection] = useState(0); // Default direction index

  const handleChange = (e) => {
    setCurrentDirection(parseInt(e.target.value, 10));
  };

  const currentImage = directions[currentDirection]?.src || "";

  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-[100vh]">
      <div className="flex flex-col gap-4 items-center">
        <H3>Merre néz a tetőd?</H3>
        <Paragraph>A csúszkával állítsd be azt az égtájat, amerre az a tetőfelület néz, ahova a napelem rendszert telepíteni szeretnéd.</Paragraph>
      </div>

      {/* Image Display */}
      <div className="relative flex flex-col items-center justify-end w-full max-w-md mt-16">
        <img
          src={currentImage}
          alt={directions[currentDirection]?.name}
          draggable="false"
          className="w-[400px] h-auto"
        />
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
        <p className="text-lg font-semibold">Aktuális égtáj:</p>
        <p className="px-4 py-2 bg-white rounded-md text-[--black] font-bold text-2xl">
          {directions[currentDirection]?.name}
        </p>
      </div>

      <SecondaryButton>Tovább</SecondaryButton>
    </div>
  );
}
