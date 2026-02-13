"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Template({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className="page-transition-frame">{children}</div>;
  }

  return (
    // Root template remounts on route changes, enabling smooth page-to-page transitions.
    <motion.div
      className="page-transition-frame"
      initial={{ opacity: 0, y: 18, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
