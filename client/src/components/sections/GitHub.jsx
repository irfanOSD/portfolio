import { useEffect, useRef } from "react";
import { githubProfile, githubRepos } from "../../data/github.js";
import "./GitHub.css";

export default function GitHub() {
  const rootRef = useRef(null);

  useEffect(() => {
    const items = rootRef.current?.querySelectorAll(".github-reveal");
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

  return (
    <section id="github" className="github" ref={rootRef}>
      <div className="github__inner">
        <h2 className="github__title">GitHub</h2>

        <div className="github__profile github-reveal">
          <span className="github__avatar" aria-hidden="true">GH</span>
          <div className="github__profile-text">
            <span className="github__username">@{githubProfile.username}</span>
            <span className="github__hint">Source code of my projects</span>
          </div>
          <a
            className="github__button"
            href={githubProfile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="github__grid">
          {githubRepos.map((repo, i) => (
            <a
              key={repo.name}
              className="repo-card github-reveal"
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="repo-card__top">
                <span className="repo-card__icon" aria-hidden="true">{"</>"}</span>
                <h3 className="repo-card__name">{repo.name}</h3>
              </div>
              <p className="repo-card__desc">{repo.description}</p>
              <ul className="repo-card__langs">
                {repo.languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <span className="repo-card__cta">View Repository →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}