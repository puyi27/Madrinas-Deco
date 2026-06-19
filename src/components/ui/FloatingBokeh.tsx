"use client";

import { motion } from "framer-motion";

export const FloatingBokeh = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#fde9e9] rounded-full blur-3xl mix-blend-multiply"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#fce4ec] rounded-full blur-3xl mix-blend-multiply"
      />
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 40, 0],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#fff0f5] rounded-full blur-3xl mix-blend-multiply"
      />
    </div>
  );
};
