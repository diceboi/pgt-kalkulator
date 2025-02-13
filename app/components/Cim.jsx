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
import BaseContainer from "./UI/BaseContainer";

export default function Cim({ pageRef }) {
  return (
    <MapProvider>
      <BaseContainer
        title={"Hova szeretnéd telepíteni a napelemet?"}
        subtitle={
          "A keresőmezőbe írd be a telepítési címet, nyomj entert, vagy válaszd ki a listából a címet. Ezután mozgasd úgy a térképet, hogy a kis piros jelölő a (tető)felület fölött legyen."
        }
      >
        <MapComponent pageRef={pageRef} />
      </BaseContainer>
    </MapProvider>
  );
}
