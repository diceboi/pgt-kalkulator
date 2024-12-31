"use client";

import { useState, useContext } from "react";
import { Context } from "../Context";
import H3 from "./Typo/H3";
import BaseContainer from "./UI/BaseContainer";

export default function Egtajak() {
  const directions = [
    { name: "Észak", src: "/egtajak/eszak.svg" },
    { name: "Északkelet", src: "/egtajak/eszakkelet.svg" },
    { name: "Kelet", src: "/egtajak/kelet.svg" },
    { name: "Délkelet", src: "/egtajak/delkelet.svg" },
    { name: "Dél", src: "/egtajak/del.svg" },
    { name: "Délnyugat", src: "/egtajak/delnyugat.svg" },
    { name: "Nyugat", src: "/egtajak/nyugat.svg" },
    { name: "Északnyugat", src: "/egtajak/eszaknyugat.svg" },
  ];

  const [currentDirection, setCurrentDirection] = useState(directions[4].name); // Default direction
  const { addPage, egtaj, setEgtaj } = useContext(Context);

  console.log("Context values:", { egtaj, setEgtaj });

  const scrollToNext = (id, delay = 1000) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, delay);
  };

  const handleChange = (e) => {
    const selectedIndex = parseInt(e.target.value, 10);
    console.log("Selected index:", selectedIndex);
    console.log("Direction at index:", directions[selectedIndex]);

    if (!directions[selectedIndex]) {
      console.error("Invalid index or missing direction!");
      return;
    }

    const selectedDirection = directions[selectedIndex].name;
    setCurrentDirection(selectedDirection);
    setEgtaj(selectedDirection); // Frissítjük az egtaj állapotot
    console.log("New egtaj:", selectedDirection); // Ellenőrzéshez
  };

  const currentImage = directions.find((dir) => dir.name === currentDirection)?.src || "/default-image.svg";
  console.log("Current image src:", currentImage);

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
          alt={currentDirection}
          draggable="false"
          className="w-[400px] h-auto"
        />
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-md">
        <input
          type="range"
          min="0"
          max="7"
          step="1"
          value={directions.findIndex((dir) => dir.name === currentDirection)}
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
          {currentDirection}
        </p>
      </div>
    </BaseContainer>
  );
}
