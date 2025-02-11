"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TimeIntervalGrid() {
  const intervals = Array.from({ length: 23 }, (_, i) => `${i + 1}:00 - ${i + 2}:00`);
  const [selectedIntervals, setSelectedIntervals] = useState([]);

  // Időintervallum kijelölése vagy törlése
  const toggleInterval = (interval) => {
    setSelectedIntervals((prev) =>
      prev.includes(interval)
        ? prev.filter((i) => i !== interval) // Ha már kiválasztott, eltávolítja
        : [...prev, interval] // Ha nincs kiválasztva, hozzáadja
    );
  };

  // Egész nap gomb logikája
  const toggleAll = () => {
    if (selectedIntervals.length === intervals.length) {
      setSelectedIntervals([]); // Ha minden ki van jelölve, töröljük az összeset
    } else {
      setSelectedIntervals([...intervals]); // Ha nincs minden kiválasztva, kijelöljük az összeset
    }
  };

  return (
    <>
      {/* Intervallumválasztó rács */}
      <div className="lg:grid-cols-8 grid grid-cols-3 gap-[1px] outline-1 rounded-xl overflow-hidden border border-[--antracit]">
        {intervals.map((interval) => (
          <motion.div
            key={interval}
            className={`w-auto h-12 flex items-center justify-center text-xs font-semibold outline-1 cursor-pointer transition-all ${
              selectedIntervals.includes(interval)
                ? "bg-[--green] text-black"
                : "bg-[--black] hover:bg-[--green] hover:text-black"
            }`}
            onClick={() => toggleInterval(interval)}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {interval}
          </motion.div>
        ))}

        {/* "Egész nap" tile */}
        <motion.div
          key="all-day"
          className={`w-auto h-12 flex items-center justify-center text-xs font-semibold outline-1 cursor-pointer transition-all ${
            selectedIntervals.length === intervals.length
              ? "bg-[--yellow] text-black"
              : "bg-[--yellow] text-black"
          }`}
          onClick={toggleAll}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          Egész nap
        </motion.div>
      </div>
    </>
  );
}
