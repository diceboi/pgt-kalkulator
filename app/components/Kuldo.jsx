"use client";

import { use } from "react";
import { useState, useContext, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Context } from "../Context";
import H1 from "./Typo/H1";
import H2 from "./Typo/H2";
import H3 from "./Typo/H3";
import H4 from "./Typo/H4";
import Paragraph from "./Typo/Paragraph";
import Label from "./Typo/Label";
import SecondaryButton from "./UI/SecondaryButton";
import MainButton from "./UI/MainButton";
import RadioButton from "./UI/RadioButton";
import ImageButton from "./UI/ImageButton";
import SendButton from "./UI/SendButton";
import { motion } from "framer-motion";
import { toast } from "sonner";
import BaseContainer from "./UI/BaseContainer";

export default function Felhasznalo({ pageRef }) {

  const searchParams = useSearchParams();

  const {
    valaszto,
    villanyszamla,
    villanyszamlaUzleti,
    villanyszamlanagy,
    telepitesihely,
    tetofajta,
    tetofedoanyag,
    egtaj,
    hajlasszog,
    magassag,
    cim,
    googlemap,
    akkumulator,
    tulpanelezes,
    felhasznalas,
    tervek,
    klima,
    futes,
    vezeteknev,
    keresztnev,
    cegnev,
    email,
    telefonszam,
    finanszirozas,
    adatkezeles,
    kampany,
    addPage,
    setVezeteknev,
    setKeresztnev,
    setCegnev,
    setEmail,
    setTelefonszam,
    setAdatkezeles,
    setKampany,
  } = useContext(Context);

  useEffect(() => {
    const kampanyParam = searchParams.get("kampany");
    if (kampanyParam) {
      let kampanyValue = "";
      switch (kampanyParam) {
        case "organikus":
          kampanyValue = "Profigreentech indikatív ajánlatkérő";
          break;
        case "fullblack":
          kampanyValue = "Full Black indikatív ajánlatkérő - Főoldalról";
          break;
        case "fullblack-zt":
          kampanyValue = "Full Black indikatív ajánlatkérő - Zöldtrend";
          break;
        case "pgt-zt":
          kampanyValue = "Profigreentech indikatív ajánlatkérő - Zöldtrend";
          break;
        default:
          kampanyValue = kampanyParam;
      }
      setKampany(kampanyValue);
      console.log("Beállított kampány érték:", kampanyValue);
    }
  }, [searchParams, setKampany]);  

  const sendToWebhook = async (contextData) => {
    try {
      const response = await fetch(
        "https://hook.eu2.make.com/wsi49d36tk5q4eoork4hwyzlqud43s8i",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contextData),
        }
      );

      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data", await response.text());
        
      }
    } catch (error) {
      console.error("Error sending data", error);
      console.log(contextData)
    }
  };

  const handleSendData = () => {

    const currentDate = new Date().toISOString();

    const dataToSend = {
      VevoTipusa: valaszto,
      HaviAramszamlaOsszege: villanyszamlanagy || villanyszamla,
      HaviVillamosenergiaFogyasztasKwh: villanyszamlaUzleti,
      TelepitesHelye: telepitesihely,
      HaztetoTipusa: tetofajta,
      TetofedoAnyagFajtaja: tetofedoanyag,
      TetofeluletIranya: egtaj,
      HaztetoDolesszogeFok: hajlasszog,
      EreszvonalMagassaga: magassag,
      TelepitesCimeGoogleMapbol: cim,
      CimGoogleLink: googlemap,
      EnergiatarolasKell: akkumulator,
      SzeretnedTulpanelezniARendszert: tulpanelezes,
      Tervek5EvenBelul: tervek,
      HanyM2tKlimatizalnal: klima,
      MekkoraLakastFutenelM2: futes,
      vezeteknev,
      keresztnev,
      SzerzodoCegNeve: cegnev,
      Email: email,
      Phone: telefonszam,
      Finanszirozas: finanszirozas,
      UgyfelkapuKezeles: adatkezeles,
      AjanlatkeresTipusa: kampany,
      AjanlatkeresBeerkezett: currentDate,
    };

    sendToWebhook(dataToSend);
  };

  return (
    <BaseContainer
      title={"Töltsd ki az űrlapot a személyes adataiddal."}
      subtitle={""}
    >
      <div className="flex flex-col items-center gap-2 w-full">
        <input
          type="text"
          name="vezeteknev"
          className="w-full lg:w-1/2 bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
          placeholder="Vezetéknév*"
          value={vezeteknev || ""}
          onChange={(e) => setVezeteknev(e.target.value)}
        />
        <input
          type="text"
          name="keresztnev"
          className="w-full lg:w-1/2 bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
          placeholder="Keresztnév*"
          value={keresztnev || ""}
          onChange={(e) => setKeresztnev(e.target.value)}
        />
        {valaszto === "Üzleti" && (
          <input
          type="text"
          name="cegnev"
          className="w-full lg:w-1/2 bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
          placeholder="Cégnév*"
          value={cegnev || ""}
          onChange={(e) => setCegnev(e.target.value)}
        />
        )}
        <input
          type="email"
          name="email"
          className="w-full lg:w-1/2 bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
          placeholder="E-mail cím*"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="phone"
          name="telefonszam"
          className="w-full lg:w-1/2 bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
          placeholder="Telefonszám*"
          value={telefonszam || ""}
          onChange={(e) => setTelefonszam(e.target.value)}
        />
        <div className="flex flex-nowrap items-start gap-2 lg:w-1/2 w-full mt-4">
          <input
            type="checkbox"
            name="acceptance"
            id="acceptance"
            className="p-4 text-lg bg-[--white] mt-1"
            checked={adatkezeles === "Hozzájárulok az adataim kezeléséhez"}
            onChange={(e) => setAdatkezeles(e.target.checked ? "Hozzájárulok az adataim kezeléséhez" : null)}
          />
          <label htmlFor="acceptance" className="text-white text-xs">
            Elolvastam, megértettem, és elfogadom az{" "}
            <a
              text={""}
              href={"https://profigreentech.hu/adatkezelesi-tajekoztato"}
              className="text-[--green] hover:underline"
              target="__blank"
            >
              adatkezelési tájékoztatóban{" "}
            </a>
            foglaltakat.*
          </label>
        </div>
      </div>
      <div
        className="p-4 flex flex-col justify-center items-center w-full"
      >
        <SendButton
          classname={""}
          onclick={() => {
            if (
              vezeteknev &&
              keresztnev &&
              email &&
              telefonszam &&
              adatkezeles === "Hozzájárulok az adataim kezeléséhez"
            ) {
              toast.success("Sikeres beküldés!");
              handleSendData();
              if (valaszto === 'Lakossági') {
                window.location.replace("https://profigreentech.hu/koszonjuk-lakossagi");
              } else {
                window.location.replace("https://profigreentech.hu/koszonjuk-kalkulator");
              }
            } else {
              toast.error(
                "Kérlek töltsd ki az összes kötelező mezőt, és fogadd el az adatkezelési nyilatkozatot."
              );
            }
          }}
        >
          Kérem az ajánlatot
        </SendButton>
      </div>
    </BaseContainer>
  );
}
