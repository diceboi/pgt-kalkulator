"use client"

import { motion } from "framer-motion"

export default function Paragraph({children, classname}) {
  return (
    <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 0.4}}
    className={`font-light xl:text-[16px] leading-[1.3rem] md:text-md text-sm tracking-normal ${classname}`}
    >
        {children}
    </motion.p>
  )
}