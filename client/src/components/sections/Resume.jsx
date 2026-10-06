import { useEffect, useRef } from "react";
import { resumeData, resumeFile, resumeDownloadName } from "../../data/resume.js";
import useResumeAvailable from "../../hooks/useResumeAvailable.js";
import "./Resume.css";

export default function Resume() {
  const rootRef = useRef(null);
  const available = useResumeAvailable(resumeFile);
  const { summary, education, skills, areas, experience, projects } = resumeData;

  useEffect(() => {
    const items = rootRef.current?.querySelectorAll(".resume-reveal");
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
    <section id="resume" className="resume" ref={rootRef}>
      <div className="resume__inner">
        <header className="resume__header">
          <div>
            <h2 className="resume__title">Resume</h2>
            <p className="resume__name">{resumeData.name}</p>
          </div>

          <div className="resume__download-wrap">
            {available ? (
              <a
                className="resume__download"
                href={resumeFile}
                download={resumeDownloadName}
              >
                Download Resume
              </a>
            ) : (
              <button
                type="button"
                className="resume__download is-disabled"
                disabled
                aria-disabled="true"
              >
                {available === false ? "Resume Coming Soon" : "Download Resume"}
              </button>
            )}
          </div>
        </header>

        <div className="resume__grid">
          {/* বাঁ কলাম */}
          <div className="resume__main">
            <article className="resume-card resume-reveal">
              <h3 className="resume-card__heading">Professional Summary</h3>
              <p className="resume-card__text">{summary}</p>
            </article>

            <article className="resume-card resume-reveal">
              <h3 className="resume-card__heading">Professional Experience</h3>
              {experience.map((job) => (
                <div className="resume-job" key={`${job.company}-${job.role}`}>
                  <div className="resume-job__top">
                    <div>
                      <h4 className="resume-job__role">{job.role}</h4>
                      <p className="resume-job__company">{job.company}</p>
                    </div>
                    <span className="resume-badge">{job.period}</span>
                  </div>
                  <ul className="resume-list">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>

            <article className="resume-card resume-reveal">
              <h3 className="resume-card__heading">Projects</h3>
              <div className="resume-projects">
                {projects.map((p) => (
                  <div className="resume-project" key={p.name}>
                    <div className="resume-project__top">
                      <h4 className="resume-project__name">{p.name}</h4>
                      {p.status && <span className="resume-badge">{p.status}</span>}
                    </div>
                    <p className="resume-card__text">{p.description}</p>
                    <ul className="resume-chips">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* ডান কলাম */}
          <aside className="resume__side">
            <article className="resume-card resume-reveal">
              <h3 className="resume-card__heading">Education</h3>
              <h4 className="resume-job__role">{education.degree}</h4>
              <p className="resume-job__company">{education.institution}</p>
              <p className="resume-card__text resume-card__text--muted">
                {education.status}
              </p>

              <ul className="resume-secondary">
                {education.secondary.map((s) => (
                  <li key={s.label}>
                    <span className="resume-badge">
                      {s.label} · {s.year}
                    </span>
                    <span>{s.institution}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="resume-card resume-reveal">
              <h3 className="resume-card__heading">Technical Skills</h3>
              <ul className="resume-chips">
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>

            <article className="resume-card resume-reveal">
              <h3 className="resume-card__heading">Development Areas</h3>
              <ul className="resume-chips">
                {areas.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}