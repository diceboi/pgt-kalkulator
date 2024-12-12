"use client";

import { useState } from "react";
import H1 from "./Typo/H1";
import H2 from "./Typo/H2";
import H3 from "./Typo/H3";
import H4 from "./Typo/H4";
import Paragraph from "./Typo/Paragraph";
import Label from "./Typo/Label";
import SecondaryButton from "./UI/SecondaryButton";

export default function Hajlasszog() {
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

  const [currentAngle, setCurrentAngle] = useState(5); // Default angle

  const handleChange = (e) => {
    setCurrentAngle(parseInt(e.target.value, 10));
  };

  const currentImage =
    angles.find((angle) => angle.value === currentAngle)?.src || "";

  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-[100vh]">
      <div className="flex flex-col gap-4 items-center">
        <H3>Mekkora a tetőd hajlásszöge?</H3>
        <Paragraph>A csúszkával válaszd ki a tetőd hajlásszögét</Paragraph>
      </div>

      <div className="relative flex flex-col items-center justify-end w-full max-w-md min-h-[300px]">
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
        <p className="text-lg font-semibold">Tető hajlásszög: </p>
        <p className="px-4 py-2 bg-white rounded-md text-[--black] font-bold text-2xl">
          {currentAngle}°
        </p>
      </div>
      <SecondaryButton>Tovább</SecondaryButton>
    </div>
  );
}
