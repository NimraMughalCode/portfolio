"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedSection({ children, direction = "up", delay = 0 }) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  let variants = {
    hidden: { opacity: 0, y: direction === "up" ? 40 : direction === "down" ? -40 : 0, x: direction === "left" ? 40 : direction === "right" ? -40 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { staggerChildren: 0.15, delay } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
} 