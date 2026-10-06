import { useEffect, useRef, useState } from "react";
import useReducedMotion from "../../hooks/useReducedMotion.js";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const visible = reducedMotion || seen;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;