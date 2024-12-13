"use client"

import { useState } from "react"
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
import Felhasznalas from "./Felhasznalas"

export default function Calculator() {
    const [page, setPage] = useState("1")
    const [rendszer, setRendszer] = useState("lakossági")
    const [tetoforma, setTetoforma] = useState("")
    const [sliderValue, setSliderValue] = useState(50)
    const [showExtraInput, setShowExtraInput] = useState(false)

    const containerVariants = {
        initial: { opacity: .5, scale: 1, background: "transparent" },
        hover: { opacity: 1, scale: 1.1, background: "#ffffff" },
        checked: { opacity: 1, scale: 1.1, background: "#f0f0f0" }
    }

    const imageVariants1 = {
        initial: { scale: 1, opacity: 1, x: "-50%", y: "-50%" },
        hover: { scale: 0.95, opacity: 0, x: "-50%", y: "-60%" },
        checked: { scale: 0.95, opacity: 0, x: "-50%", y: "-60%" }
    }

    const imageVariants2 = {
        initial: { scale: 1, opacity: 0, x: "-50%", y: "-50%" },
        hover: { scale: 0.95, opacity: 1, x: "-50%", y: "-60%" },
        checked: { scale: 0.95, opacity: 1, x: "-50%", y: "-60%" }
    }

    const textVariants = {
        initial: { opacity: 1, x: "-50%", y: "0%", color: "#ffffff" },
        hover: { opacity: 1, x: "-50%", y: "0%", color: "#222" },
        checked: { opacity: 1, x: "-50%", y: "0%", color: "#222" }
    }

    return (
        <section className="flex w-full min-h-[100vh] bg-gradient-to-b from-[--black] to-[--antracit] py-20">
            <div className="container m-auto px-4">
                <div className="flex flex-col items-center justify-center gap-8 border border-[--white-border] p-8 rounded-3xl w-full bg-[--antracit] shadow-2xl">

                    <motion.div id="page1" className={`flex flex-col gap-8 py-10 ${page === '1' ? 'bg-[--white-bg]' : ''} w-full rounded-2xl`}>
                        <H3 classname={"text-center"}>Válassz, milyen rendszert szeretnél?</H3>
                        <div className="flex lg:flex-row flex-col items-center justify-center gap-8">
                            {["lakossagi", "uzleti"].map((option) => (
                                <motion.label
                                    key={option}
                                    className="relative border border-[white] rounded-xl w-[200px] h-[200px] cursor-pointer"
                                    variants={containerVariants}
                                    initial="initial"
                                    whileHover="hover"
                                    animate={rendszer === option ? "checked" : "initial"}
                                >
                                    <motion.input
                                        type="radio"
                                        name="system"
                                        value={option}
                                        className="hidden"
                                        onClick={() => {
                                            setRendszer(option); // First function
                                            setPage("2"); // Second function
                                        }}
                                    />
                                    {/* Image 1 */}
                                    <motion.img
                                        src={`/${option}-feher.svg`}
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                                        variants={imageVariants1}
                                    />
                                    {/* Image 2 */}
                                    <motion.img
                                        src={`/${option}-szines.svg`}
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                                        variants={imageVariants2}
                                    />
                                    {/* Text */}
                                    <motion.p
                                        className="text-md absolute left-1/2 bottom-2 -translate-x-1/2 font-bold text-[--white]"
                                        variants={textVariants}
                                    >
                                        {option === "lakossagi" ? "Lakossági" : "Üzleti"}
                                    </motion.p>
                                </motion.label>
                            ))}
                        </div>
                    </motion.div>

                    {page === '2' && (
                        <motion.div
                            id="page2"
                            className={`flex flex-col items-center gap-8 ${page === '2' ? 'bg-[--white-bg]' : ''} rounded-2xl py-10 w-full`}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                        >
                            <div className="flex flex-col gap-4 items-center">
                                <H3 classname={"text-center"}>Mennyi a havi villanyszámlád?</H3>
                                <Paragraph classname={"text-center"}>Használd a csúszkát vagy írd be a konkrét összeget.</Paragraph>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-8 lg:min-w-[500px] min-w-full">
                                {/* Slider */}
                                <motion.input
                                    type="range"
                                    id="slider"
                                    min="0"
                                    max="200000"
                                    value={sliderValue}
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        setSliderValue(value);

                                        // Calculate the percentage and update the CSS variable
                                        const percentage = (value / 200000) * 100; // Assuming 200000 is the max value
                                        const sliderElement = e.target;
                                        sliderElement.style.setProperty("--value", `${percentage}%`);

                                        // Calculate dynamic glow intensity
                                        const glowIntensity = Math.min((percentage / 100) * 1, 2); // Scale glow intensity (0 to 1)
                                        const glowColor = `rgba(247, 200, 42, ${glowIntensity})`;

                                        // Update CSS variable for thumb glow
                                        sliderElement.style.setProperty("--thumb-glow", glowColor);

                                        // Show extra input
                                        if (value === 200000) {
                                            setShowExtraInput(true) // Show extra input if slider reaches max
                                        } else {
                                            setShowExtraInput(false) // Hide extra input otherwise
                                        }
                                    }}
                                    className="slider w-1/2"
                                />


                                {/* Input Field */}
                                <div className="relative flex flex-col gap-8">
                                    <motion.input
                                        type="number"
                                        min="0"
                                        max="200000"
                                        value={sliderValue}
                                        onChange={(e) => {
                                            const newValue = Math.min(Math.max(Number(e.target.value), 0), 200000)
                                            setSliderValue(newValue)

                                            if (newValue === 200000) {
                                                setShowExtraInput(true)
                                            } else {
                                                setShowExtraInput(false)
                                            }
                                        }}
                                        className="w-fit appearance-none bg-white border border-[--white-border] h-10 rounded outline-none text-center text-2xl text-[--black] py-2 px-8"
                                    />
                                    <motion.label htmlFor="slider" className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[--black] z-10 w-fit h-auto">
                                        Ft
                                    </motion.label>
                                </div>

                                {/* Render dynamically based on `showExtraInput` */}
                                {showExtraInput && (
                                    <>
                                        <div className="flex flex-col gap-4 items-center py-10">
                                            <Paragraph classname={"text-center"}>Ha a havi villanyszmlád nagyobb mint 200 000 Ft<br></br> írd be ide az összeget.</Paragraph>
                                            <div className="relative flex flex-col gap-4 items-center">
                                                <motion.input
                                                    id="slider200"
                                                    name="slider200"
                                                    type="number"
                                                    min="0"
                                                    max="9999999"
                                                    className="w-fit appearance-none bg-[--antracit] border border-[--white-border] h-10 rounded outline-none text-center text-2xl py-2 px-8"
                                                />
                                                <motion.label htmlFor="slider" className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-white z-10 w-fit h-auto">
                                                    Ft
                                                </motion.label>
                                            </div>
                                        </div>
                                    </>
                                )}

                            </div>
                            <SecondaryButton onclick={() => setPage("3")}>Tovább</SecondaryButton>
                        </motion.div>
                    )}

                    {page === '3' && (
                        <>
                            <motion.div
                                id="page3"
                                className={`flex flex-col items-center gap-8 ${page === '3' ? 'bg-[--white-bg]' : ''} rounded-2xl py-10 w-full`}
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                            >
                                <H3>Válaszd ki a tetőd fajtáját</H3>
                                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
                                    {[
                                        "nyereg",
                                        "felnyereg",
                                        "sodobozos",
                                        "lapos",
                                        "mforma",
                                        "dobozos",
                                        "tagolt",
                                        "manzard",
                                        "manzard2",
                                        "sator",
                                        "pillango",
                                        "elo",
                                        "oromzatos-kontyolt",
                                        "dobozos2",
                                        "osztott",
                                        "hajlitott"
                                    ].map((option) => {
                                        // Mapping object for formatted names
                                        const formattedNames = {
                                            nyereg: "Nyereg",
                                            felnyereg: "Félnyereg",
                                            sodobozos: "Sodódozos",
                                            lapos: "Lapos",
                                            mforma: "M Forma",
                                            dobozos: "Dobozos",
                                            tagolt: "Tagolt",
                                            manzard: "Manzárd",
                                            manzard2: "Manzárd 2",
                                            sator: "Sátor",
                                            pillango: "Pillangó",
                                            elo: "Elő",
                                            "oromzatos-kontyolt": "Oromzatos Kontyolt",
                                            dobozos2: "Dobozos 2",
                                            osztott: "Osztott",
                                            hajlitott: "Hajlított"
                                        };

                                        return (
                                            <motion.label
                                                key={option}
                                                className="relative border border-[white] rounded-xl w-[200px] h-[200px] cursor-pointer"
                                                variants={containerVariants}
                                                initial="initial"
                                                whileHover="hover"
                                                animate={tetoforma === option ? "checked" : "initial"}
                                            >
                                                <motion.input
                                                    type="radio"
                                                    name="system"
                                                    value={option}
                                                    className="hidden"
                                                    onClick={() => {
                                                        setTetoforma(option); // Update state with the selected option
                                                    }}
                                                />
                                                {/* Image 1 */}
                                                <motion.img
                                                    src={`/tetoforma/${option}-feher.svg`}
                                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                                                    variants={imageVariants1}
                                                />
                                                {/* Image 2 */}
                                                <motion.img
                                                    src={`tetoforma/${option}-szines.svg`}
                                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                                                    variants={imageVariants2}
                                                />
                                                {/* Text */}
                                                <motion.p
                                                    className="text-md absolute left-1/2 bottom-2 -translate-x-1/2 font-bold text-[--black]"
                                                    variants={textVariants}
                                                >
                                                    {formattedNames[option] || option} {/* Display formatted name or fallback */}
                                                </motion.p>
                                            </motion.label>
                                        );
                                    })}
                                </div>
                            </motion.div>


                            <motion.div
                                id="page3"
                                className={`flex flex-col items-center gap-8 ${page === '3' ? 'bg-[--white-bg]' : ''} rounded-2xl py-10 w-full`}
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                            >
                                <H3>Válaszd ki a tetőfedő anyagod fajtáját</H3>
                                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
                                    {[
                                        "bitumenes",
                                        "cserepeslemez",
                                        "hodfarku-keramia",
                                        "hornyolt-keramia",
                                        "hullam",
                                        "korcolt",
                                        "kozuzalekos-cserepeslemez",
                                        "profilos-beton",
                                        "profilos-keramia",
                                        "sik-beton",
                                        "sikpala",
                                        "trapezlemez",
                                        "zsindely",
                                    ].map((option) => {
                                        // Mapping object for formatted names
                                        const formattedNames = {
                                            bitumenes: "Bitumenes lemez",
                                            cserepeslemez: "Cserepeslemez",
                                            hodfarku: "Hódfarkú kerámiacserép",
                                            "honyolt-keramia": "Hornyolt kerámiacserép",
                                            hullam: "Hullámpala",
                                            korcolt: "Korcolt lemez",
                                            "kozuzalekos-cserepeslemez": "Kőzúzalékos cserepeslemez",
                                            "profilos-beton": "Profilos betoncserép",
                                            "profilos-keramia": "Profilos kerámiacserép",
                                            "sik-beton": "Sík betoncserép",
                                            sikpala: "Síkpala",
                                            tapezlemez: "Trapézlemez",
                                            zsindely: "Zsindely",
                                        };

                                        return (
                                            <motion.label
                                                key={option}
                                                className="relative border border-[white] rounded-xl w-[200px] h-[200px] cursor-pointer"
                                                variants={containerVariants}
                                                initial="initial"
                                                whileHover="hover"
                                                animate={tetoforma === option ? "checked" : "initial"}
                                            >
                                                <motion.input
                                                    type="radio"
                                                    name="system"
                                                    value={option}
                                                    className="hidden"
                                                    onClick={() => {
                                                        setTetoforma(option); // Update state with the selected option
                                                    }}
                                                />
                                                {/* Image 1 */}
                                                <motion.img
                                                    src={`/tetofedoanyag/${option}-feher.svg`}
                                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                                                    variants={imageVariants1}
                                                />
                                                {/* Image 2 */}
                                                <motion.img
                                                    src={`tetofedoanyag/${option}-szines.svg`}
                                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-auto"
                                                    variants={imageVariants2}
                                                />
                                                {/* Text */}
                                                <motion.p
                                                    className="text-md absolute left-1/2 bottom-2 -translate-x-1/2 font-bold text-[--black] text-center"
                                                    variants={textVariants}
                                                >
                                                    {formattedNames[option] || option} {/* Display formatted name or fallback */}
                                                </motion.p>
                                            </motion.label>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </>
                    )}

                    <Egtajak />
                    <Hajlasszog />
                    <Magassag />
                    <Cim />
                    <Akkumulator />
                    <Tulpanelezes />
                    <Felhasznalas />

                </div>
            </div>
        </section>
    )
}
