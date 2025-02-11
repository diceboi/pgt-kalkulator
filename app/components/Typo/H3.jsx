"use client"

import { motion } from "framer-motion"

export default function H3({children, classname}) {
  return (
    <motion.h3
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.4, bounce: "spring" }}
    className={`font-semibold xl:text-xl md:text-lg text-base tracking-tighter ${classname}`}
    >
        {children}
    </motion.h3>
  )
}