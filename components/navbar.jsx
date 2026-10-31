"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useApp } from "./client-shell";

const panels = [
  { href: "/hunter", en: "Job hunter", ar: "باحث عن عمل", note: "Find your next move", noteAr: "اعثر على خطوتك التالية" },
  { href: "/employers", en: "Hire from ittisal", ar: "التوظيف من اتصال", note: "Meet your next great hire", noteAr: "التقِ بموظفك القادم", ribbon: "Coming soon" },
  { href: "/investors", en: "Find investors", ar: "ابحث عن مستثمرين", note: "Back the future of work", noteAr: "ادعم مستقبل العمل", ribbon: "Coming soon" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const { language } = useApp();
  const ar = language === "ar";

  // Close the Browse menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the Browse menu on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="relative z-40 w-full px-3 pt-3 sm:px-6 sm:pt-5">
      <nav className="navbar-frame navbar-firmament glass relative mx-auto flex w-full items-center justify-between overflow-visible rounded-xl px-4 py-3 sm:px-6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <motion.div
            aria-hidden="true"
            className="navbar-golden-flow"
            style={{ backgroundPosition: "100% 0%" }}
            animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <Link href="/" className="group relative z-10 flex items-center gap-3" aria-label="ittisal home">
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-[var(--accent)]">
            <img src="/favicon.png" alt="" className="h-full w-full object-cover" />
          </span>
          <span className="hidden text-sm font-bold tracking-tight min-[400px]:inline sm:text-base">
            ittisal <span className="mx-1 text-[var(--accent)]">/</span> اتصال
          </span>
        </Link>

        <div className="z-10 flex items-center gap-2 text-sm font-semibold md:gap-7">
          {/* Browse dropdown — shared by mobile and desktop */}
          <div className="md:relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-haspopup="menu"
              aria-expanded={open}
              className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-2 text-xs font-bold md:border-0 md:px-0 md:text-sm md:font-semibold hover:opacity-80"
            >
              {ar ? "تصفح" : "Browse"} <span className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}>⌄</span>
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="glass absolute inset-x-3 top-full z-50 mt-2 rounded-2xl bg-[var(--surface-strong)] p-2 shadow-2xl sm:inset-x-6 md:inset-x-auto md:end-0 md:top-12 md:mt-0 md:w-72"
                >
                  {panels.map((panel) => (
                    <Link
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      href={panel.href}
                      key={panel.href}
                      className="block rounded-xl p-3 transition-colors hover:bg-[var(--accent-soft)]"
                    >
                      <span className="block text-sm font-bold text-[var(--foreground)]">{ar ? panel.ar : panel.en}</span>
                      <span className="text-xs font-normal text-[var(--muted)]">{ar ? panel.noteAr : panel.note}</span>
                      {panel.ribbon && (
                        <span className="mt-2 inline-flex rounded-full bg-[var(--accent-soft)] px-2 py-1 text-[10px] font-bold text-[var(--accent)]">
                          {panel.ribbon}
                        </span>
                      )}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/careers" className="hidden hover:opacity-80 md:inline">
            {ar ? "الوظائف في اتصال" : "Career at ittisal"}
          </Link>
          <Link href="/careers" className="rounded-full border border-[var(--line)] px-3 py-2 text-xs font-bold md:hidden">
            {ar ? "الوظائف" : "Careers"}
          </Link>
          <Link
            href="/settings"
            aria-label={ar ? "الإعدادات" : "Settings"}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-base transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            ⚙
          </Link>
        </div>
      </nav>
    </header>
  );
}
