import { MapProvider } from "../providers/map-provider";
import MapComponent from "./Map";
import { useState } from "react";
import H1 from "./Typo/H1";
import H2 from "./Typo/H2";
import H3 from "./Typo/H3";
import H4 from "./Typo/H4";
import Paragraph from "./Typo/Paragraph";
import Label from "./Typo/Label";
import SecondaryButton from "./UI/SecondaryButton";
import { motion } from "framer-motion";

export default function Cim({pageRef}) {
  return (
    <MapProvider>
      <motion.div
        id="page3"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className="w-full lg:min-h-[78vh] min-h-[85vh] flex flex-col justify-between"
      >
        <div className="flex flex-col items-center justify-center gap-4 pb-8 px-4 w-full rounded-2xl flex-grow">
          <H3 classname={"text-center text-white"}>
            Hova szeretnéd telepíteni a napelemet?
          </H3>
          <Paragraph classname={"text-center lg:w-1/2 text-white"}>
            A keresőmezőbe <strong>írd be a telepítési címet</strong>, nyomj entert, vagy válaszd ki a listából a címet. Ezután mozgasd úgy a térképet, hogy a kis piros jelölő a (tető?)felület fölött legyen.
          </Paragraph>
        </div>
        <MapComponent pageRef={pageRef}/>
      </motion.div>
    </MapProvider>
  );
}
