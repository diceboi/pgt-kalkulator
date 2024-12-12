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

export default function Cim() {
    return (
        <MapProvider>
            <div className="flex flex-col gap-4 items-center mb-20">
                <H3 classname={"text-center"}>Hova szeretnéd telepíteni a napelemet?</H3>
                <Paragraph classname={"text-center lg:w-1/2"}>
                    A keresőmezőbe <strong>írd be a telepítési címet</strong>, majd a google térképen a kis <strong>piros markerrel jelöld meg a felületet</strong>, ahova a napelemeket telepíteni szeretnéd (ha nem látszik, akkor elég az ingatlan is).
                </Paragraph>
            </div>
            <MapComponent />
        </MapProvider>
    )
}