"use client";

import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ children, openstate, onClose, classname }) {
  if (!openstate) return null;

  {/*const handleBackgroundClick = (e) => {
    e.stopPropagation();
    onClose();
  };*/}

  {/*const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to the background
  };*/}

  return (
    <motion.section
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[100] overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      //onClick={handleBackgroundClick}
    >
      <motion.div
        className={`relative flex flex-col items-center bg-[--antracit] bg-opacity-75 backdrop-blur-md shadow-2xl w-[90%] max-w-xl p-8 ${classname} overflow-y-auto rounded-3xl`}
        initial={{ y: -50, opacity: 0 }}
        style={{ maxHeight: '90vh' }} // Constrain modal height
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        //onClick={handleContentClick}
      >
        {/*<button className="absolute top-4 right-4 z-50" onClick={onClose}>
          <AiOutlineClose className="w-6 h-6 text-gray-700 hover:text-red-500" />
        </button>*/}
        {children}
      </motion.div>
    </motion.section>
  );
}
