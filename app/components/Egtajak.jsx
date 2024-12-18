"use client";

import { useState, useContext } from "react";
import { Context } from "../Context";
import H3 from "./Typo/H3";
import Paragraph from "./Typo/Paragraph";
import SecondaryButton from "./UI/SecondaryButton";
import MainButton from "./UI/MainButton";
import { motion } from "framer-motion";

export default function Egtajak({pageRef}) {
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
  const { currentPage, setCurrentPage, egtaj, setEgtaj, tetofajta } = useContext(Context);

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (e) => {
    setCurrentDirection(parseInt(e.target.value, 10));
  };

  const currentImage = directions[currentDirection]?.src || "";

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
          <H3 classname={"text-center text-white"}>Merre néz a tetőd?</H3>
          <Paragraph classname={"text-center text-white"}>
            A csúszkával állítsd be azt az égtájat, amerre az a tetőfelület néz,
            ahova a napelem rendszert telepíteni szeretnéd.
          </Paragraph>
        </div>

        {/* Image Display */}
        <div className="relative flex flex-col items-center justify-end w-full max-w-md">
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
          <H3 classname={"text-center text-white"}>Aktuális égtáj:</H3>
          <p className="px-4 py-2 bg-white rounded-md text-[--black] font-bold text-2xl">
            {directions[currentDirection]?.name}
          </p>
        </div>
      </div>
      <div className="sticky bottom-0 bg-[--transparent] border-t border-[--white-border] bg-opacity-5 backdrop-blur-xl p-4 flex flex-nowrap justify-center gap-4 items-center w-full">
        <SecondaryButton onclick={() => {
          if (tetofajta === 'lapos') {
            setCurrentPage("3")
            scrollToTop()
          } else {
            setCurrentPage("5")
            scrollToTop()
          }
        }}>
          Vissza
        </SecondaryButton>
        <MainButton onclick={() => {setCurrentPage("7"), scrollToTop()}}>Tovább</MainButton>
      </div>
    </motion.div>
  );
}
