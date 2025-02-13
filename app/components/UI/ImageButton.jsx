"use client"

import { motion } from "framer-motion"

export default function ImageButton({onclick, animate, baseImage, hoverImage, text, value, classname}) {

    const containerVariants = {
        initial: { opacity: .5, scale: 1, background: "#ffffff00" },
        hover: { opacity: 1, scale: 1.1, background: "#ffffff" },
        checked: { opacity: 1, scale: 1.1, background: "#f0f0f0" }
    }

    const imageVariants1 = {
        initial: { scale: 1, opacity: 1, x: "-50%", y: "-60%" },
        hover: { scale: 0.95, opacity: 0, x: "-50%", y: "-70%" },
        checked: { scale: 0.95, opacity: 0, x: "-50%", y: "-70%" }
    }

    const imageVariants2 = {
        initial: { scale: 1, opacity: 0, x: "-50%", y: "-60%" },
        hover: { scale: 0.95, opacity: 1, x: "-50%", y: "-70%" },
        checked: { scale: 0.95, opacity: 1, x: "-50%", y: "-70%" }
    }

    const textVariants = {
        initial: { opacity: 1, x: "-50%", y: "0%", color: "#ffffff" },
        hover: { opacity: 1, x: "-50%", y: "0%", color: "#222" },
        checked: { opacity: 1, x: "-50%", y: "0%", color: "#222" }
    }

  return (
    <motion.label
      className={`relative rounded-xl cursor-pointer ${classname}`}
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
      {/* Image 1 */}
      <motion.img
        src={baseImage}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto"
        variants={imageVariants1}
      />
      {/* Image 2 */}
      <motion.img
        src={hoverImage}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto"
        variants={imageVariants2}
      />
      {/* Text */}
      <motion.p
        className="text-[12px] lg:text-[16px] absolute left-1/2 bottom-1 -translate-x-1/2 font-medium text-[--white] text-center min-w-[100px] lg:leading-[1rem] leading-[.75rem]"
        variants={textVariants}
      >
        {text}
      </motion.p>
    </motion.label>
  );
}
