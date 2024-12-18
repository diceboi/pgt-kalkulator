"use client"

import { motion } from "framer-motion"
import { toast } from "sonner"

export default function SendButton({children, classname, onclick}) {
  return (
    <motion.button
    transition={{ duration: 0.4, bounce: "spring" }}
    className={`font-bold xl:text-lg tracking-wide border border-[--green] px-4 py-2 text-[--black] hover:text-white bg-[--green] hover:bg-[--green-hover] hover:text-[--black] transition-all rounded-full ${classname}`}
    onClick={onclick}
    >
        {children}
    </motion.button>
  )
}