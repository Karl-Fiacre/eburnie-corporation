import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
}

export function TiltCard3D({ children, className = "", glare = true }: TiltCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 260, damping: 24 };
  const rotateX = useSpring(useTransform(y, [0, 1], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-14, 14]), springConfig);
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      ref={ref}
      className={`relative [perspective:1000px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-card shadow-premium transition-shadow duration-500 ease-out will-change-transform hover:shadow-[0_24px_60px_-16px_oklch(0.20_0.10_325/0.35),0_0_40px_-12px_oklch(0.74_0.13_85/0.35)]"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated gradient border overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 [background:linear-gradient(var(--background),var(--background))_padding-box,linear-gradient(135deg,var(--gold),var(--gold-bright),var(--prestige))_border-box]" />

        {/* Glare / sheen */}
        {glare && (
          <motion.div
            className="pointer-events-none absolute -inset-[50%] z-10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            style={{
              background: "radial-gradient(circle at var(--glare-x) var(--glare-y), oklch(1 0 0 / 0.18), transparent 40%)",
              x: glareX,
              y: glareY,
            }}
          />
        )}

        <div className="relative z-20 h-full">{children}</div>
      </motion.div>
    </div>
  );
}
