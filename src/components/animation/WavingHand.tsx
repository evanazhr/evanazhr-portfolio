"use client";

import { motion } from "framer-motion";

export default function WavingHand() {
  return (
    <motion.span
      role="img"
      aria-label="wave"
      animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
      transition={{
        repeat: Infinity,
        repeatDelay: 2,
        duration: 1,
        ease: "easeInOut",
      }}
      style={{ display: "inline-block", transformOrigin: "70% 70%" }}
    >
      👋
    </motion.span>
  );
}
