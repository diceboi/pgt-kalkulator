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
import BaseContainer from "./UI/BaseContainer";

export default function TetoParameterek() {
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

  const [currentDirection, setCurrentDirection] = useState(4);
  const [currentAngle, setCurrentAngle] = useState(35); // Default angle
  const {
    currentPage,
    addPage,
    hajlasszog,
    setHajlaszszog,
    egtaj,
    setEgtaj,
    tetofajta,
    magassag,
    setMagassag,
  } = useContext(Context);

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const handleChangeAangle = (e) => {
    setCurrentAngle(parseInt(e.target.value, 10));
  };

  const handleChangeDirection = (e) => {
    setCurrentDirection(parseInt(e.target.value, 10));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setMagassag(value); // Update context value
  };

  const currentAngleImage =
    angles.find((angle) => angle.value === currentAngle)?.src || "";

  const currentDirectionImage = directions[currentDirection]?.src || "";

  const scrollToNext = (id, delay = 1000) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, delay); // Delay idő milliszekundumban
  };

  return (
    <BaseContainer
      title={"Mik a tetőd paraméterei?"}
      subtitle={
        "A csúszkával válaszd ki a megfelelő hajlásszöget, égtájat, majd írd be a magasságot."
      }
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-16 m-4">
        <div id="hajlasszog" className="flex flex-col gap-4">
          <div className="relative flex flex-col items-center justify-end w-full max-w-md min-h-[250px]">
            {/* Display the current image */}
            <img
              src={currentAngleImage}
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
              value={currentAngle !== undefined ? currentAngle : ""}
              onChange={handleChangeAangle}
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

        <div id="egtaj" className="flex flex-col gap-4">
          <div className="relative flex flex-col items-center justify-end w-full max-w-md">
            <img
              src={currentDirectionImage}
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
              onChange={handleChangeDirection}
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
        <div id="magassag" className="flex flex-col gap-4">
          <div className="relative flex flex-col items-center justify-end w-full max-w-md min-h-[250px]">
            {/* Display the current image */}
            <img
              src="/epuletmagassag/magassag.svg"
              alt={`Magasság`}
              className="w-[200px] h-auto"
            />
          </div>

          {/* Display the current angle */}
          <div className="flex flex-col gap-4 items-center">
            <H3 classname={"text-white text-center"}>Tető magasság: </H3>
            <div className="relative flex flex-col gap-4 items-center">
              <input
                id="magassag"
                name="magassag"
                min="0"
                type="number"
                value={magassag !== undefined ? magassag : ""}
                className="px-8 py-2 bg-white rounded-md text-[--black] font-bold text-2xl w-28"
                onChange={handleInputChange}
              ></input>
              <label
                htmlFor="magassag"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[--black] z-10 h-auto"
              >
                m
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          magassag ? "flex" : "hidden"
        } bottom-0 p-4 flex-col justify-center items-center`}
      >
        <MainButton
          onclick={() => {
            addPage("6"), scrollToNext("6");
          }}
          classname={"animate-bounce"}
        >
          Tovább
        </MainButton>
      </div>
    </BaseContainer>
  );
}
