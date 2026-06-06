import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const hasNumber = !isNaN(numeric) && numeric > 0;
  const extra = value.replace(/[0-9]/g, "");

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView && hasNumber) mv.set(numeric);
  }, [inView, hasNumber, numeric, mv]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref}>
      {hasNumber ? display : value}
      {hasNumber ? extra : ""}
      {suffix}
    </span>
  );
}
