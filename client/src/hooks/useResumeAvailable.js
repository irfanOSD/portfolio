import { useEffect, useState } from "react";

// null = চেক চলছে, true = PDF আছে, false = নেই
export default function useResumeAvailable(url) {
  const [available, setAvailable] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(url, { method: "HEAD" })
      .then((res) => {
        const type = res.headers.get("content-type") || "";
        if (!cancelled) setAvailable(res.ok && type.includes("pdf"));
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return available;
}