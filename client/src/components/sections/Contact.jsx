import { useEffect, useRef, useState } from "react";
import { contactLinks } from "../../data/contact.js";
import "./Contact.css";

export default function Contact() {
  const rootRef = useRef(null);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const items = rootRef.current?.querySelectorAll(".contact-reveal");
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
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // ক্লিপবোর্ড সাপোর্ট না থাকলে চুপচাপ বাদ
    }
  };

  return (
    <section id="contact" className="contact" ref={rootRef}>
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__subtitle">
          Feel free to reach out through any of the channels below.
        </p>

        <div className="contact__grid">
          {contactLinks.map((item, i) => (
            <div
              className="contact-card contact-reveal"
              key={item.id}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <a
                className="contact-card__link"
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={`${item.label}: ${item.value}`}
              >
                <span className="contact-card__icon" aria-hidden="true">
                  {item.glyph}
                </span>
                <span className="contact-card__text">
                  <span className="contact-card__label">{item.label}</span>
                  <span className="contact-card__value">{item.value}</span>
                </span>
              </a>

              {item.copy && (
                <button
                  type="button"
                  className="contact-card__copy"
                  onClick={() => handleCopy(item.id, item.copy)}
                >
                  {copiedId === item.id ? "Copied!" : "Copy"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}