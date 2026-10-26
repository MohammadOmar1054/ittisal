"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const panels = [
  { href: "/hunter", en: "Job hunter", ar: "باحث عن عمل", note: "Find your next move" },
  { href: "/employers", en: "Hire from ittisal", ar: "التوظيف من اتصال", note: "Meet your next great hire" },
  { href: "/investors", en: "Find investors", ar: "ابحث عن مستثمرين", note: "Back the future of work" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30 mx-auto max-w-7xl px-5 pt-5 sm:px-8">
      <nav className="glass flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="ittisal home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] text-sm font-black text-[#0b1321]">i</span>
          <span className="text-sm font-bold tracking-tight sm:text-base">ittisal <span className="mx-1 text-[var(--accent)]">/</span> اتصال</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-semibold text-[var(--muted)] md:flex">
          <div className="relative">
            <button onClick={() => setOpen(!open)} className="flex items-center gap-2 py-2 hover:text-[var(--foreground)]">
              Browse <span className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}>⌄</span>
            </button>
            <AnimatePresence>
              {open && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="glass absolute right-0 top-12 w-72 rounded-2xl p-2 shadow-2xl">
                {panels.map((panel) => <Link onClick={() => setOpen(false)} href={panel.href} key={panel.href} className="block rounded-xl p-3 transition-colors hover:bg-[var(--accent-soft)]">
                  <span className="block text-sm font-bold text-[var(--foreground)]">{panel.en} <span className="font-normal text-[var(--muted)]">· {panel.ar}</span></span>
                  <span className="text-xs font-normal text-[var(--muted)]">{panel.note}</span>
                </Link>)}
              </motion.div>}
            </AnimatePresence>
          </div>
          <Link href="/careers" className="hover:text-[var(--foreground)]">Career at ittisal</Link>
          <Link href="/settings" aria-label="Settings" className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-base transition hover:border-[var(--accent)] hover:text-[var(--accent)]">⚙</Link>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/hunter" className="rounded-full border border-[var(--line)] px-3 py-2 text-xs font-bold">Browse</Link>
          <Link href="/careers" className="rounded-full border border-[var(--line)] px-3 py-2 text-xs font-bold">Careers</Link>
          <Link href="/settings" className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-base">⚙</Link>
        </div>
      </nav>
    </header>
  );
}
