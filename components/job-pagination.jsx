"use client";

/**
 * Builds a compact list of page items: first, last, current ±1, with gaps.
 * A gap that would hide exactly one page shows that page instead of "…".
 */
export function getPageItems(current, total) {
  const wanted = [1, total, current - 1, current, current + 1].filter((p) => p >= 1 && p <= total);
  const sorted = [...new Set(wanted)].sort((a, b) => a - b);
  const items = [];
  let previous = 0;
  for (const p of sorted) {
    if (p - previous === 2) items.push(previous + 1);
    else if (p - previous > 2) items.push(`gap-${p}`);
    items.push(p);
    previous = p;
  }
  return items;
}

function Chevron({ direction }) {
  // "prev" points toward the inline-start edge, "next" toward inline-end; both mirror in RTL.
  const flip = direction === "next" ? "-scale-x-100 rtl:scale-x-100" : "rtl:-scale-x-100";
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 shrink-0 ${flip}`}>
      <path d="M12.5 15 7.5 10l5-5" />
    </svg>
  );
}

const navButton =
  "button-outline inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center gap-1 rounded-xl px-2.5 text-sm font-bold disabled:pointer-events-none disabled:opacity-40";

export default function JobPagination({ page, pages, onPageChange, labels }) {
  if (pages <= 1) return null;
  const isFirst = page <= 1;
  const isLast = page >= pages;
  const go = (target) => {
    const next = Math.min(pages, Math.max(1, target));
    if (next !== page) onPageChange(next);
  };

  return (
    <nav aria-label={labels.pagination} className="mt-8 w-full">
      {/* Mobile: Prev · Page X of Y · Next */}
      <div className="flex w-full items-center justify-between gap-2 px-4 md:hidden">
        <button type="button" onClick={() => go(page - 1)} disabled={isFirst} aria-label={labels.prev} className={navButton}>
          <Chevron direction="prev" />
          <span>{labels.prev}</span>
        </button>
        <p aria-live="polite" className="min-w-0 text-center text-xs font-semibold leading-tight text-[var(--muted)] min-[360px]:text-sm">
          {labels.page} <span className="text-[var(--foreground)]">{page}</span> {labels.of} {pages}
        </p>
        <button type="button" onClick={() => go(page + 1)} disabled={isLast} aria-label={labels.next} className={navButton}>
          <span>{labels.next}</span>
          <Chevron direction="next" />
        </button>
      </div>

      {/* md+: compact numbered window */}
      <div className="hidden w-full items-center justify-center gap-2 px-4 md:flex">
        <button type="button" onClick={() => go(page - 1)} disabled={isFirst} aria-label={labels.prev} className={navButton}>
          <Chevron direction="prev" />
        </button>
        {getPageItems(page, pages).map((item) =>
          typeof item === "string" ? (
            <span key={item} aria-hidden="true" className="grid min-h-[44px] min-w-[28px] place-items-center text-sm text-[var(--muted)]">…</span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => go(item)}
              aria-current={page === item ? "page" : undefined}
              aria-label={`${labels.page} ${item}`}
              className={`grid min-h-[44px] min-w-[44px] place-items-center rounded-xl px-2 text-sm font-bold ${page === item ? "bg-[var(--accent)] text-[#0b1321]" : "button-outline"}`}
            >
              {item}
            </button>
          )
        )}
        <button type="button" onClick={() => go(page + 1)} disabled={isLast} aria-label={labels.next} className={navButton}>
          <Chevron direction="next" />
        </button>
      </div>
    </nav>
  );
}
