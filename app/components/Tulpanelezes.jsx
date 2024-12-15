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

export default function Tulpanelezes() {
  const [currentHeight, setCurrentHeight] = useState(); // Default angle
  const { currentPage, setCurrentPage } = useContext(Context);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 min-h-[100vh]">
        <div className="flex flex-col gap-4 items-center">
          <H3>Szeretnéd túlpanelezni a rendszert?</H3>
        </div>

        <div className="relative flex flex-col items-center justify-end w-full max-w-md min-h-[300px]">
          {/* Display the current image */}
          <img
            src="/tulpanelezes/tulpanelezes.svg"
            alt={`Magasság`}
            className="w-[200px] h-auto"
          />
        </div>

        {/* Display the current angle */}
        <div className="flex flex-col gap-4 items-center">
          <div className="relative flex flex-col gap-4 items-center">
            <input
              id="magassag"
              name="magassag"
              min="0"
              type="checkbox"
              className="px-8 py-2 bg-white rounded-md text-[--black] font-bold text-2xl w-28"
            ></input>
            <label
              htmlFor="magassag"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[--black] z-10 h-auto"
            >
              Igen
            </label>
          </div>
          <div className="relative flex flex-col gap-4 items-center">
            <input
              id="magassag"
              name="magassag"
              min="0"
              type="checkbox"
              className="px-8 py-2 bg-white rounded-md text-[--black] font-bold text-2xl w-28"
            ></input>
            <label
              htmlFor="magassag"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[--black] z-10 h-auto"
            >
              nem
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap justify-between items-center lg:w-1/2 w-full">
        <SecondaryButton onclick={() => setCurrentPage("9")}>
          Vissza
        </SecondaryButton>
        <MainButton onclick={() => setCurrentPage("11")}>Tovább</MainButton>
      </div>
    </>
  );
}