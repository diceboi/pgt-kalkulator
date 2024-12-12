"use client"

import { motion } from "framer-motion";

export default function CircleGesture() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circular gradient for the stroke */}
          <linearGradient id="circular-gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f7c82a" />
            <stop offset="100%" stopColor="#f7c82a00" />
          </linearGradient>
        </defs>

        {/* "Snake" Body */}
        <motion.circle
          cx="150"
          cy="150"
          r="125"
          stroke="url(#circular-gradient)" // Apply circular gradient
          strokeWidth="30"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="300 628" // Visible part and hidden part
          strokeDashoffset="0" // Initial offset
          animate={{ strokeDashoffset: [-942, 0] }} // Move the body
          transition={{
            duration: 4, // Total time for a full rotation
            repeat: Infinity, // Loop indefinitely
            ease: "linear", // Smooth constant speed
          }}
        />

        {/* Snake Head */}
        <motion.circle
          cx="150"
          cy="25" // Start position (top of the circle)
          r="15"
          fill="#f7c82a" // Solid yellow color
          animate={{
            rotate: 360, // Move along the circle
          }}
          transition={{
            duration: 4, // Sync with the body rotation
            repeat: Infinity, // Loop indefinitely
            ease: "linear", // Constant speed
          }}
          style={{
            transformOrigin: "150px 150px", // Set rotation center to the middle of the circle
          }}
        />
      </svg>
    </div>
  );
}
