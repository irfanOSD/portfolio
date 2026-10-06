import { useEffect, useState } from "react";

function useInView(ref) {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting)
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

export default useInView;