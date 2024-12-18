"use client";

import { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import { motion } from "framer-motion";
import H3 from "./Typo/H3";
import Paragraph from "./Typo/Paragraph";
import Button from "./Typo/Button";
import SecondaryButton from "./UI/SecondaryButton";
import Egtajak from "./Egtajak";
import Hajlasszog from "./Hajlasszog";
import Magassag from "./Magassag";
import Cim from "./Cim";
import Akkumulator from "./Akkumulator";
import Tulpanelezes from "./Tulpanelezes";
import Felhasznalas from "./Felhasznalas";
import { toast } from "sonner";
import MainButton from "./UI/MainButton";
import ImageButton from "./UI/ImageButton";

export default function Valaszto({pageRef}) {
  const [page, setPage] = useState("1");
  const [rendszer, setRendszer] = useState("lakossági");

  const { currentPage, setCurrentPage, valaszto, setValaszto } =
    useContext(Context);

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    initial: { opacity: 0.5, scale: 1, background: "transparent" },
    hover: { opacity: 1, scale: 1.1, background: "#ffffff" },
    checked: { opacity: 1, scale: 1.1, background: "#f0f0f0" },
  };

  const imageVariants1 = {
    initial: { scale: 1, opacity: 1, x: "-50%", y: "-50%" },
    hover: { scale: 0.95, opacity: 0, x: "-50%", y: "-60%" },
    checked: { scale: 0.95, opacity: 0, x: "-50%", y: "-60%" },
  };

  const imageVariants2 = {
    initial: { scale: 1, opacity: 0, x: "-50%", y: "-50%" },
    hover: { scale: 0.95, opacity: 1, x: "-50%", y: "-60%" },
    checked: { scale: 0.95, opacity: 1, x: "-50%", y: "-60%" },
  };

  const textVariants = {
    initial: { opacity: 1, x: "-50%", y: "0%", color: "#ffffff" },
    hover: { opacity: 1, x: "-50%", y: "0%", color: "#222" },
    checked: { opacity: 1, x: "-50%", y: "0%", color: "#222" },
  };

  return (
    <motion.div id="page1" className="w-full lg:min-h-[78vh] min-h-[85vh] flex flex-col justify-between">
      <div
        className={`flex flex-col items-center justify-center lg:gap-16 gap-8 pb-8 px-4 w-full rounded-2xl self-center flex-grow`}
      >
        <H3 classname={"text-center text-white"}>
          Válassz, milyen rendszert szeretnél?
        </H3>
        <div className="flex flex-nowrap items-center justify-center gap-8">
          <ImageButton
            onclick={() => {
              setRendszer("lakossagi"), setValaszto("Lakossági");
            }}
            animate={valaszto === "Lakossági" ? "checked" : "initial"}
            baseImage={"/lakossagi-feher.svg"}
            hoverImage={"/lakossagi-szines.svg"}
            text={"Lakossági"}
          />
          <ImageButton
            onclick={() => {
              setRendszer("uzleti"), setValaszto("Üzleti");
            }}
            animate={valaszto === "Üzleti" ? "checked" : "initial"}
            baseImage={"/uzleti-feher.svg"}
            hoverImage={"/uzleti-szines.svg"}
            text={"Üzleti"}
          />
        </div>
      </div>
      <div className="sticky bottom-0 self-end bg-[--transparent] border-t border-[--white-border] bg-opacity-5 backdrop-blur-xl p-4 flex flex-nowrap justify-center gap-4 items-center w-full">
        <MainButton
          classname={""}
          onclick={() => {
            if (!valaszto) {
              toast.error("Kérjük, válassz egy rendszert!");
            } else {
              setCurrentPage("2");
              scrollToTop();
            }
          }}
        >
          Tovább
        </MainButton>
      </div>
    </motion.div>
  );
}
