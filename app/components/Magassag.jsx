"use client";

import { useState } from "react";
import H1 from "./Typo/H1";
import H2 from "./Typo/H2";
import H3 from "./Typo/H3";
import H4 from "./Typo/H4";
import Paragraph from "./Typo/Paragraph";
import Label from "./Typo/Label";
import SecondaryButton from "./UI/SecondaryButton";

export default function Magassag() {
  const [currentHeight, setCurrentHeight] = useState(); // Default angle

  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-[100vh]">
      <div className="flex flex-col gap-4 items-center">
        <H3>Milyen magasan van a tetőd?</H3>
        <Paragraph>
          Írd be, hogy mekkora a távolság a talaj és az ereszvonal között.
        </Paragraph>
      </div>

      <div className="relative flex flex-col items-center justify-end w-full max-w-md min-h-[300px]">
        {/* Display the current image */}
        <img
          src="/epuletmagassag/magassag.svg"
          alt={`Magasság`}
          className="w-[200px] h-auto"
        />
      </div>

      {/* Display the current angle */}
      <div className="flex flex-col gap-4 items-center">
        <p className="text-lg font-semibold">Tető magasság: </p>
        <div className="relative flex flex-col gap-4 items-center">
            <input
            id="magassag"
            name="magassag"
            min="0"
          type="number"
          className="px-8 py-2 bg-white rounded-md text-[--black] font-bold text-2xl w-28"
        ></input>
        <label
          htmlFor="magassag"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[--black] z-10 h-auto"
        >
          m
        </label>
        </div>
        
      </div>
      <SecondaryButton>Tovább</SecondaryButton>
    </div>
  );
}
