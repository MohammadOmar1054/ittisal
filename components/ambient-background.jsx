"use client";

const colors = ["#b85c38", "#6f7d5d", "#d49a6a", "#f1c47b", "#8d5d3f"];
const words = ["اتصال", "ترابط", "تواصل", "مهنة", "احتراف", "مسار", "فرصة", "تعاون", "شبكة", "موهبة", "عمل", "نمو", "شغف", "نجاح"];

export default function AmbientBackground() {
  const particles = Array.from({ length: 42 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    top: `${(index * 61) % 100}%`,
    dx: `${((index * 29) % 180) - 90}px`,
    dy: `${((index * 47) % 180) - 90}px`,
    duration: `${9 + (index % 10)}s`,
    delay: `${-((index * 7) % 14)}s`,
    color: colors[index % colors.length],
    word: words[index % words.length]
  }));
  return <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="ambient-glow absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />
    <div className="ambient-glow ambient-glow-secondary absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[var(--secondary)] opacity-35 blur-3xl" />
    {particles.map((particle, index) => <span key={index} className="particle" style={{ "--left": particle.left, "--top": particle.top, "--dx": particle.dx, "--dy": particle.dy, "--duration": particle.duration, "--delay": particle.delay, "--particle-color": particle.color }}>
      <span className="particle-word" lang="ar" dir="rtl">{particle.word}</span>
    </span>)}
  </div>;
}
