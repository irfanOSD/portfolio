import { useEffect, useRef } from "react";
import { journey, journeyPath } from "../../data/journey.js";
import "./Journey.css";

export default function Journey() {
  const listRef = useRef(null);
  const fillRef = useRef(null);

  // প্রতিটি মাইলফলক স্ক্রিনে এলে reveal করা
  useEffect(() => {
    const items = listRef.current?.querySelectorAll(".journey-item");
    if (!items) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // স্ক্রল করলে লাইনটা ধীরে ধীরে ভরে ওঠে (re-render ছাড়াই)
  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;

    let ticking = false;
    const update = () => {
      const rect = list.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (vh * 0.6 - rect.top) / rect.height)
      );
      fill.style.transform = `scaleY(${progress})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="journey" className="journey">
      <div className="journey__orb journey__orb--a" aria-hidden="true" />
      <div className="journey__orb journey__orb--b" aria-hidden="true" />

      <div className="journey__inner">
        <h2 className="journey__title">My Journey</h2>

        <ol className="journey__path" aria-label="Journey stages">
          {journeyPath.map((step, i) => (
            <li key={step}>
              {step}
              {i < journeyPath.length - 1 && (
                <span className="journey__arrow" aria-hidden="true">→</span>
              )}
            </li>
          ))}
        </ol>

        <div className="journey__list" ref={listRef}>
          <div className="journey__line" aria-hidden="true">
            <div className="journey__line-fill" ref={fillRef} />
          </div>

          {journey.map((item, i) => (
            <article
              key={`${item.year}-${item.title}`}
              className={`journey-item ${i % 2 === 0 ? "is-left" : "is-right"} ${
                item.state ? `is-${item.state}` : ""
              }`}
            >
              <span className="journey-item__node" aria-hidden="true" />
              <div className="journey-item__card">
                <span className="journey-item__year">{item.year}</span>
                <h3 className="journey-item__title">{item.title}</h3>
                {item.meta && <p className="journey-item__meta">{item.meta}</p>}
                <p className="journey-item__desc">{item.description}</p>

                {item.tags.length > 0 && (
                  <ul className="journey-item__tags">
                    {item.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}