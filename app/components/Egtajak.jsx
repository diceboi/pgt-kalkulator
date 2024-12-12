"use client"

import { useState, useRef } from "react";
import { motion } from "framer-motion"
import H3 from "./Typo/H3"
import Paragraph from "./Typo/Paragraph"
import Button from "./Typo/Button"
import SecondaryButton from "./UI/SecondaryButton"

export default function Egtajak() {
    const directions = [
        { name: "North", src: "/egtajak/eszak.svg" },
        { name: "Northeast", src: "/egtajak/eszakkelet.svg" },
        { name: "East", src: "/egtajak/kelet.svg" },
        { name: "Southeast", src: "/egtajak/delkelet.svg" },
        { name: "South", src: "/egtajak/del.svg" },
        { name: "Southwest", src: "/egtajak/delnyugat.svg" },
        { name: "West", src: "/egtajak/nyugat.svg" },
        { name: "Northwest", src: "/egtajak/eszaknyugat.svg" },
      ];
    
      const [currentDirection, setCurrentDirection] = useState(0); // Index of the current direction
      const isDragging = useRef(false);
      const startX = useRef(0);
      const startY = useRef(0);
    
      // Helper function to calculate angle based on movement
      const calculateAngle = (deltaX, deltaY) => {
        return (Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 360) % 360;
      };
    
      // Helper function to get direction index based on angle
      const getDirectionIndex = (angle) => {
        return Math.round(angle / 45) % 8; // Divide 360° into 8 equal segments
      };
    
      const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
        startY.current = e.clientY;
      };
    
      const handleMouseMove = (e) => {
        if (!isDragging.current) return;
    
        const deltaX = e.clientX - startX.current;
        const deltaY = e.clientY - startY.current;
        const angle = calculateAngle(deltaX, deltaY);
        const directionIndex = getDirectionIndex(angle);
    
        setCurrentDirection(directionIndex);
      };
    
      const handleMouseUp = () => {
        isDragging.current = false;
      };
    
      const handleTouchStart = (e) => {
        isDragging.current = true;
        startX.current = e.touches[0].clientX;
        startY.current = e.touches[0].clientY;
      };
    
      const handleTouchMove = (e) => {
        e.preventDefault(); // Prevent page scrolling
        if (!isDragging.current) return;
      
        const deltaX = e.touches[0].clientX - startX.current;
        const deltaY = e.touches[0].clientY - startY.current;
        const angle = calculateAngle(deltaX, deltaY);
        const directionIndex = getDirectionIndex(angle);
      
        setCurrentDirection(directionIndex);
      };
    
      const handleTouchEnd = () => {
        isDragging.current = false;
      };
    
      return (
        <div
          className="relative "
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseLeave={handleMouseUp}
        >
          {/* Display the current image */}
          <img
            src={directions[currentDirection].src}
            alt={directions[currentDirection].name}
            draggable="false"
            className="w-full h-full object-cover cursor-move"
          />
        </div>
      );
    }