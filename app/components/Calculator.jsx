"use client"

import { useState, useContext } from "react"
import { motion } from "framer-motion"
import H3 from "./Typo/H3"
import Paragraph from "./Typo/Paragraph"
import Button from "./Typo/Button"
import SecondaryButton from "./UI/SecondaryButton"
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

export default function Calculator() {

    const { currentPage } = useContext(Context)

    return (
        <section className="flex w-full lg:min-h-[80vh] bg-gradient-to-b from-[--black] to-[--antracit] py-2">
            <div className="container m-auto">
                <div className="flex flex-col items-center justify-center gap-8 lg:py-16 py-8 rounded-3xl w-full">

                {currentPage === '1' && (
                    <Valaszto />
                )}
                {currentPage === '2' && (    
                    <Villanyszamla />
                )}
                {currentPage === '3' && (
                    <Tetofajta />
                )}
                {currentPage === '4' && (
                    <Tetofedoanyag />
                )}
                {currentPage === '5' && (
                    <Egtajak />
                )}
                {currentPage === '6' && (
                    <Hajlasszog />
                )}
                {currentPage === '7' && (
                    <Magassag />
                )}
                {currentPage === '8' && (
                    <Cim />
                )}
                {currentPage === '9' && (
                    <Akkumulator />
                )}
                {currentPage === '10' && (
                    <Tulpanelezes />
                )}
                {currentPage === '11' && (
                    <Felhasznalas />
                )}
                </div>
            </div>
        </section>
    )
}
