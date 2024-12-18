"use client";

import { useState, useContext } from "react";
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
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Akkumulator({pageRef}) {
  const [currentHeight, setCurrentHeight] = useState(); // Default angle
  const { currentPage, setCurrentPage, setAkkumulator, akkumulator } =
    useContext(Context);

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      id="page3"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      className="w-full lg:min-h-[78vh] min-h-[85vh] flex flex-col justify-between"
    >
      <div className="flex flex-col items-center justify-center lg:gap-16 gap-8 pb-8 px-4 w-full rounded-2xl flex-grow">
        <div className="flex flex-col gap-4 items-center">
          <H3 classname={"text-center text-white"}>
            Szeretnél akkumulátort a rendszerhez?
          </H3>
        </div>

        <div className="flex flex-row items-center lg:gap-16 gap-8">
          <div className="relative flex flex-col items-center justify-end w-full max-w-md">
            <img
              src="/akkumulator/akkumulator.svg"
              alt={`Akkumulátor`}
              className="lg:w-[200px] w-[125px] h-auto"
            />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-8">
              {["igen", "nem"].map((option) => {
                // Mapping object for formatted names
                const formattedNames = {
                  igen: "Igen",
                  nem: "Nem",
                };

                return (
                  <RadioButton
                    key={option}
                    onclick={() => setAkkumulator(option)}
                    animate={akkumulator === option ? "checked" : "initial"}
                    text={formattedNames[option] || option}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 bg-[--transparent] border-t border-[--white-border] bg-opacity-5 backdrop-blur-xl p-4 flex flex-nowrap justify-center gap-4 items-center w-full">
        <SecondaryButton onclick={() => {setCurrentPage("8"), scrollToTop()}}>
          Vissza
        </SecondaryButton>
        <MainButton
          onclick={() => {
            if (akkumulator) {
              // Ellenőrzés, hogy van-e cim ÉS googlemap
              setCurrentPage("10");
              scrollToTop()
            } else {
              toast.error(
                "Kérlek válassz a lehetőségek közül."
              );
            }
          }}
        >
          Tovább
        </MainButton>
      </div>
      </motion.div>
  );
}
