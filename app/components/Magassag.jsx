"use client";

import { useState, useContext, useEffect } from "react";
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

export default function Magassag() {
  const { currentPage, addPage, magassag, setMagassag } =
    useContext(Context);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setMagassag(value); // Update context value
  };

  const scrollToNext = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }); // Delay idő milliszekundumban
  };

  return (
    <BaseContainer
          title={"Milyen magasan van a tetőd?"}
          subtitle={
            "Írd be, hogy mekkora a távolság a talaj és az ereszvonal között."
          }
        >
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
              value={magassag || ""}
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
      <div className={`${magassag ? 'flex' : 'hidden' } bottom-0 p-4 flex-col justify-center items-center`}>
          <MainButton
            onclick={() => {addPage('8'), scrollToNext('8')}}
            classname={'animate-bounce'}
          >
            Tovább
          </MainButton>
      </div>
    </BaseContainer>
  );
}
