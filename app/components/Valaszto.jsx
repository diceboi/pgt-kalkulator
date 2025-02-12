"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Paragraph from "./Typo/Paragraph";
import H3 from "./Typo/H3";
import H1 from "./Typo/H1";
import H4 from "./Typo/H4";
import TimeSelector from "./UI/TimeSelector";
import ValasztoTile from "./UI/ValasztoTile";
import { TbBulb } from "react-icons/tb";
import H2 from "./Typo/H2";

export default function Valaszto() {

  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email"); 
  const MAX_TILES = 28; 
  const [tiles, setTiles] = useState([
    {
      id: 1,
      icon: "/akvarium.svg",
      nev: "Akvárium (szűrő, világítás, fűtés)",
      value: "akvarium",
    },
    {
      id: 2,
      icon: "/bojler.svg",
      nev: "Bojler (melegvíz készítés)",
      value: "bojler",
    },
    { id: 3, icon: "/borhuto.svg", nev: "Borhűtő", value: "borhuto" },
    {
      id: 4,
      icon: "/elektromos-futotest.svg",
      nev: "Elektromos fűtőtestek",
      value: "elektromos-futotest",
    },
    {
      id: 5,
      icon: "/elektromos-redony.svg",
      nev: "Elektromos redőny",
      value: "elektromos-redony",
    },
    {
      id: 6,
      icon: "/elektromos-suto.svg",
      nev: "Elektromos sütő",
      value: "elektromos-suto",
    },
    {
      id: 7,
      icon: "/elektromos-vasalo.svg",
      nev: "Elektromos vasaló",
      value: "elektromos-vasalo",
    },
    {
      id: 8,
      icon: "/fagyaszto-lada.svg",
      nev: "Fagyasztó láda",
      value: "fagyaszto-lada",
    },
    { id: 9, icon: "/gozkabin.svg", nev: "Gőzkabin", value: "gozkabin" },
    { id: 10, icon: "/hifi.svg", nev: "HiFi rendszer", value: "hifi" },
    {
      id: 11,
      icon: "/hoszivattyu.svg",
      nev: "Hőszivattyús rendszer (fűtés/hűtés)",
      value: "hoszivattyu",
    },
    {
      id: 12,
      icon: "/hutoszekreny.svg",
      nev: "Hűtőszekrény",
      value: "hutoszekreny",
    },
    {
      id: 13,
      icon: "/indukcios-fozolap.svg",
      nev: "Indukciós főzőlap",
      value: "indukcios-fozolap",
    },
    {
      id: 14,
      icon: "/jatekkonzol.svg",
      nev: "Játék konzol",
      value: "jatekkonzol",
    },
    {
      id: 15,
      icon: "/klima.svg",
      nev: "Klímaberendezés (hűtés/fűtés)",
      value: "klima",
    },
    { id: 16, icon: "/kamera.svg", nev: "Kamera rendszer", value: "kamera" },
    { id: 17, icon: "/pc.svg", nev: "Laptop/PC", value: "pc" },
    { id: 18, icon: "/led.svg", nev: "LED világítás (összesen)", value: "led" },
  ]);

  const addNewTile = () => {
    if (tiles.length < MAX_TILES) {
      setTiles([
        ...tiles,
        { id: Date.now(), icon: "", nev: "", value: "", isNew: true },
      ]);
    }
  };

  const removeTile = (id) => {
    setTiles(tiles.filter((tile) => tile.id !== id));
  };

  return (
    <section className="flex w-full lg:min-h-[80vh] bg-[--black] pt-2 px-4">
      <div className="flex flex-col container m-auto lg:py-20 py-8 gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row lg:justify-center gap-4 ">
            <H1>Üdv</H1>
            <H1 classname={'text-[--yellow]'}>{name}</H1>
          </div>
          <Paragraph classname={'lg:text-center lg:w-1/2 lg:self-center'}>Ezen az oldalon a te energiafelhasználásodat vizsgáluk meg annak érdekében, hogy a napelem rendszeredhez a legoptimálisabb akkumulátort tudjuk ajánlani.</Paragraph>
        </div>
        <div className="flex flex-col gap-8 bg-[--white-bg] w-full h-auto rounded-3xl shadow-md p-8">
          <H2 classname={'text-center lg:w-1/2 self-center text-[--yellow]'}>
            Melyik hónapra optimalizáljuk az akkumulátor használatot?
          </H2>
          <div className="flex flex-row gap-2 items-center justify-center w-fit self-center bg-[--white-bg] px-4 py-2 rounded-2xl lg:w-1/2">
            <TbBulb className="min-w-8 h-auto"/>
            <Paragraph classname={''}>
            Válaszd ki azt a hónapot, amikor számodra a legfontosabb, hogy az akkumulátor optimálisan működjön! Ez segít abban, hogy a rendszered a kiválasztott időszakban a lehető legjobban illeszkedjen az energiaigényeidhez. 
          </Paragraph>
          </div>
          
          <select
            name="honap"
            id="honap"
            className="bg-[--black] px-4 py-4 text-xl rounded-full w-fit self-center text-center my-8"
          >
            <option value="Január">Január</option>
            <option value="Február">Február</option>
            <option value="Március">Március</option>
            <option value="Április">Április</option>
            <option value="Május">Május</option>
            <option value="Június">Június</option>
            <option value="Július">Július</option>
            <option value="Augusztus">Augusztus</option>
            <option value="Szeptember">Szeptember</option>
            <option value="Október">Október</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="flex flex-col gap-4 bg-[--white-bg] w-full h-auto rounded-3xl shadow-md p-8">
          <H2 classname={'text-center lg:w-1/2 self-center text-[--yellow]'}>
            Jelöld meg azokat az eszközökek amiket napi szinten használsz a
            háztartásodban.
          </H2>
          <div className="flex flex-row gap-2 items-center justify-center w-fit self-center bg-[--white-bg] px-4 py-2 rounded-2xl">
            <TbBulb className="min-w-8 h-auto"/>
            <Paragraph classname={''}>
            Az oldal jobb oldalán, a kis zöld választógombbal tudod kijelölni, majd konfigurálni a kívánt eszközöket.
          </Paragraph>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-16">
            {tiles.map((tile) => (
              <ValasztoTile
                key={tile.id}
                icon={tile.icon}
                nev={tile.nev}
                value={tile.value}
                isNew={tile.isNew}
                onRemove={() => removeTile(tile.id)}
              />
            ))}
          </div>
          <button
            onClick={addNewTile}
            className="px-4 py-2 bg-[--green] text-black rounded-2xl shadow-md hover:bg-[--green-hover] transition-all min-h-[100px]"
            disabled={tiles.length >= MAX_TILES}
          >
            <H3>Egyéb eszköz hozzáadása</H3>
          </button>
        </div>
      </div>
    </section>
  );
}
