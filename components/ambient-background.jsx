"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <motion.div animate={{ x: [0, 60, -20, 0], y: [0, 30, 70, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />
    <motion.div animate={{ x: [0, -50, 25, 0], y: [0, 50, -20, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[var(--secondary)] opacity-35 blur-3xl" />
    <div className="absolute inset-0 opacity-[.035]" style={{ backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
  </div>;
}
