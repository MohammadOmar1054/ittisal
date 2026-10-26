"use client";

const colors = ["#ff9076", "#76e4c0", "#d7a2ff", "#f5d477", "#69a9ff"];

export default function AmbientBackground() {
  const particles = Array.from({ length: 42 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    top: `${(index * 61) % 100}%`,
    dx: `${((index * 29) % 180) - 90}px`,
    dy: `${((index * 47) % 180) - 90}px`,
    size: `${2 + (index % 4)}px`,
    duration: `${9 + (index % 10)}s`,
    delay: `${-((index * 7) % 14)}s`,
    color: colors[index % colors.length]
  }));
  return <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />
    <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[var(--secondary)] opacity-35 blur-3xl" />
    {particles.map((particle, index) => <span key={index} className="particle" style={{ "--left": particle.left, "--top": particle.top, "--dx": particle.dx, "--dy": particle.dy, "--size": particle.size, "--duration": particle.duration, "--delay": particle.delay, "--particle-color": particle.color }} />)}
    <div className="absolute inset-0 opacity-[.035]" style={{ backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
  </div>;
}
