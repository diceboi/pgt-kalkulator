"use client";

import { motion } from "framer-motion";
import H3 from "../Typo/H3";
import Paragraph from "../Typo/Paragraph";

export default function BaseContainer({ children, title, subtitle }) {
  return (
    <motion.div
      className={`relative w-full flex flex-col justify-between rounded-3xl pb-8`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-4 w-full rounded-2xl self-start flex-grow`}
      >
        <div className="sticky top-[68px] p-2 z-40 flex flex-col items-center justify-center bg-[--black] rounded-2xl w-[calc(100%-16px)] mb-16 mt-2 shadow-xl">
          <H3 classname={"text-center text-white"}>{title}</H3>
          {
            (subtitle = !"" && (
              <Paragraph classname={"text-center text-white mt-2"}>
                {subtitle}
              </Paragraph>
            ))
          }
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full p-2">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
