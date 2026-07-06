"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => setVisible(value > 0.02));
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-slate-950"
      style={{ scaleX: scrollYProgress }}
      animate={{ opacity: visible ? 1 : 0 }}
    />
  );
}
