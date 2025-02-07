"use client";

import React, { useEffect } from "react";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  onScroll?: () => void;
  className?: string;
}

const ScrollIndicator = ({
  onScroll = () => {},
  className = "",
}: ScrollIndicatorProps) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        onScroll();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll]);

  return (
    <motion.div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer bg-background ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
