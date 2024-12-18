"use client"

import { useContext, useRef } from "react"
import Egtajak from "./Egtajak"
import Hajlasszog from "./Hajlasszog"
import Magassag from "./Magassag"
import Cim from "./Cim"
import Akkumulator from "./Akkumulator"
import Tulpanelezes from "./Tulpanelezes"
import Valaszto from "./Valaszto"
import Felhasznalas from "./Felhasznalas"
import Villanyszamla from "./Villanyszamla"
import Tetofajta from "./Tetofajta"
import Tetofedoanyag from "./Tetofedoanyag"
import { Context } from "../Context"
import Tervek from "./Tervek"
import Felhasznalo from "./Felhasznalo"

export default function Calculator() {

    const { currentPage } = useContext(Context)
    const pageRef = useRef(null);

    return (
        <section ref={pageRef} className="flex w-full lg:min-h-[80vh] bg-gradient-to-b from-[--black] to-[--antracit] pt-2">
            <div className="container m-auto">
                <div className="flex flex-col items-center justify-center gap-8 lg:pt-16 pt-8 rounded-3xl w-full">

                {currentPage === '1' && (
                    <Valaszto pageRef={pageRef} />
                )}
                {currentPage === '2' && (    
                    <Villanyszamla pageRef={pageRef} />
                )}
                {currentPage === '3' && (
                    <Tetofajta pageRef={pageRef} />
                )}
                {currentPage === '4' && (
                    <Tetofedoanyag pageRef={pageRef} />
                )}
                {currentPage === '5' && (
                    <Hajlasszog pageRef={pageRef} />
                )}
                {currentPage === '6' && (
                    <Egtajak pageRef={pageRef} />
                )}
                {currentPage === '7' && (
                    <Magassag pageRef={pageRef} />
                )}
                {currentPage === '8' && (
                    <Cim pageRef={pageRef} />
                )}
                {currentPage === '9' && (
                    <Akkumulator pageRef={pageRef} />
                )}
                {currentPage === '10' && (
                    <Tulpanelezes pageRef={pageRef} />
                )}
                {currentPage === '11' && (
                    <Felhasznalas pageRef={pageRef} />
                )}
                {currentPage === '12' && (
                    <Tervek pageRef={pageRef} />
                )}
                {currentPage === '13' && (
                    <Felhasznalo pageRef={pageRef} />
                )}
                </div>
            </div>
        </section>
    )
}
