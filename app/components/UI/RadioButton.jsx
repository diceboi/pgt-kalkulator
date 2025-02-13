"use client"

import { motion } from "framer-motion"

export default function RadioButton({onclick, animate, text, value}) {

    const containerVariants = {
        initial: { opacity: .5, scale: 1, background: "#ffffff00" },
        hover: { opacity: 1, scale: 1.1, background: "#ffffff" },
        checked: { opacity: 1, scale: 1.1, background: "#f0f0f0" }
    }
    const textVariants = {
        initial: { color: "#ffffff" },
        hover: { color: "#222" },
        checked: { color: "#222" }
    }

  return (
    <motion.label
      className="flex flex-col items-center justify-center rounded-xl cursor-pointer border border-[--white-border] px-4 py-2"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      animate={animate}
    >
      <motion.input
        type="radio"
        name="system"
        value={value}
        className="hidden"
        onClick={onclick}
      />
      {/* Text */}
      <motion.p
        className="text-lg font-bold text-center min-w-[100px]"
        variants={textVariants}
      >
        {text}
      </motion.p>
    </motion.label>
  );
}
