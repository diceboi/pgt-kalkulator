"use client"

import { motion } from "framer-motion"

export default function Button({children, classname}) {
  return (
    <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 0.4}}
    className={`font-medium xl:text-[16px] leading-[1rem] md:text-md text-sm tracking-normal ${classname}`}
    >
        {children}
    </motion.p>
  )
}