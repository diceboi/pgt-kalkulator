"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ViewportHoverEffect() {
  const [visibleElement, setVisibleElement] = useState(null);
  const controls = useAnimation();

  // Stable refs for each element
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  // Memoized refs array to prevent the "changed size" error
  const refs = useMemo(() => [ref1, ref2], [ref1, ref2]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleElement = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleElement = entry.target;
          }
        });

        setVisibleElement(mostVisibleElement);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Fine-grained thresholds
      }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs]);

  useEffect(() => {
    if (visibleElement) {
      const rect = visibleElement.getBoundingClientRect();
      const containerRect = document.body.getBoundingClientRect();

      controls.start({
        width: rect.width,
        height: rect.height,
        x: rect.left - containerRect.left,
        y: rect.top - containerRect.top,
        borderRadius: window.getComputedStyle(visibleElement).borderRadius,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" },
      });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [visibleElement, controls]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Shared Background */}
      <motion.div
        className="absolute bg-blue-500"
        initial={{ opacity: 0 }}
        animate={controls}
      />

      {/* Elements to track */}
      <div
        ref={ref1}
        className="relative z-10 w-40 h-24 bg-white rounded-lg shadow-md"
      >
        Object 1
      </div>
      <div
        ref={ref2}
        className="relative z-10 w-60 h-32 bg-white rounded-lg shadow-md mt-8"
      >
        Object 2
      </div>
    </div>
  );
}
