"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Egtajak from "./Egtajak";
import TetoParameterek from "./TetoParameterek";
import Telepitesihely from "./Telepitesihely"
import Magassag from "./Magassag";
import Cim from "./Cim";
import Akkumulator from "./Igenyek";
import Tulpanelezes from "./Tulpanelezes";
import Valaszto from "./Valaszto";
import Felhasznalas from "./Felhasznalas";
import Villanyszamla from "./Villanyszamla";
import Tetofajta from "./Tetofajta";
import Tetofedoanyag from "./Tetofedoanyag";
import { Context } from "../Context";
import Tervek from "./Tervek";
import Felhasznalo from "./Felhasznalo";
import { useInView } from "react-intersection-observer";
import Igenyek from "./Igenyek";

export default function Calculator() {
    const { currentPage, valaszto } = useContext(Context);

  const sectionRefs = useRef({});

  // Helper function to apply styles dynamically
  const getBackgroundClass = (isInView) =>
    isInView ? "bg-[--white-bg] shadow-xl" : "";

  // Use `useInView` for each section
  const [valasztoRef, valasztoInView] = useInView({ threshold: 0.75 });
  const [villanyszamlaRef, villanyszamlaInView] = useInView({ threshold: 0.75 });
  const [tetofajtaRef, tetofajtaInView] = useInView({ threshold: 0.75 });
  const [telepiteshelyeRef, telepiteshelyeInView] = useInView({ threshold: 0.75 })
  const [tetofedoanyagRef, tetofedoanyagInView] = useInView({ threshold: 0.75 });
  const [hajlasszogRef, hajlasszogInView] = useInView({ threshold: 0.75 });
  const [egtajakRef, egtajakInView] = useInView({ threshold: 0.75 });
  const [magassagRef, magassagInView] = useInView({ threshold: 0.75 });
  const [cimRef, cimInView] = useInView({ threshold: 0.75 });
  const [akkumulatorRef, akkumulatorInView] = useInView({ threshold: 0.75 });
  const [tulpanelezesRef, tulpanelezesInView] = useInView({ threshold: 0.75 });
  const [felhasznalasRef, felhasznalasInView] = useInView({ threshold: 0.75 });
  const [tervekRef, tervekInView] = useInView({ threshold: 0.75 });
  const [felhasznaloRef, felhasznaloInView] = useInView({ threshold: 0.75 });

  return (
    <section className="flex w-full lg:min-h-[80vh] bg-[--black] pt-2">
      <div className="container m-auto">
        <div className="flex flex-col items-center justify-center gap-8 lg:py-16 py-8 rounded-3xl w-full p-2">
        {currentPage.includes("1") && (
          <div
            ref={valasztoRef}
            id="1"
            className={`${getBackgroundClass(valasztoInView)} flex flex-col justify-between min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <Valaszto />
          </div>
        )}
        {currentPage.includes("2") && (
          <div
            ref={villanyszamlaRef}
            id="2"
            className={`${getBackgroundClass(villanyszamlaInView)} flex flex-col justify-betweem min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <Villanyszamla />
          </div>
        )}
        {currentPage.includes("3") && valaszto === "Üzleti" && (
          <div
            ref={telepiteshelyeRef}
            id="3"
            className={`${getBackgroundClass(telepiteshelyeInView)} flex flex-col justify-betweem min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <Telepitesihely />
          </div>
        )}
        {currentPage.includes("4") && (
          <div
            ref={tetofajtaRef}
            id="4"
            className={`${getBackgroundClass(tetofajtaInView)} flex flex-col justify-betweem min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <Tetofajta />
          </div>
        )}
        {currentPage.includes("5") && (
          <div
            ref={tetofedoanyagRef}
            id="5"
            className={`${getBackgroundClass(tetofedoanyagInView)} flex flex-col justify-betweem min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <Tetofedoanyag />
          </div>
        )}
        {currentPage.includes("6") && (
          <div
            ref={hajlasszogRef}
            id="6"
            className={`${getBackgroundClass(hajlasszogInView)} flex flex-col justify-betweem min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <TetoParameterek />
          </div>
        )}
        {currentPage.includes("7") && (
          <div
            ref={cimRef}
            id="7"
            className={`${getBackgroundClass(cimInView)} flex flex-col justify-betweem min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <Cim />
          </div>
        )}
        {currentPage.includes("8") && (
          <div
            ref={akkumulatorRef}
            id="8"
            className={`${getBackgroundClass(akkumulatorInView)} flex flex-col justify-betweem min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <Igenyek />
          </div>
        )}
        {currentPage.includes("9") && (
          <div
            ref={tervekRef}
            id="9"
            className={`${getBackgroundClass(tervekInView)} flex flex-col justify-betweem min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <Tervek />
          </div>
        )}
        {currentPage.includes("10") && (
          <div
            ref={felhasznaloRef}
            id="10"
            className={`${getBackgroundClass(felhasznaloInView)} flex flex-col justify-betweem min-h-[50vh] w-full rounded-3xl transition-all`}
          >
            <Felhasznalo />
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
