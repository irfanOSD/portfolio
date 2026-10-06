import { projects } from "../../data/projects.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <h2 className="projects__title">Projects</h2>
        <p className="projects__subtitle">Some work I made</p>

        <div className="projects__list">
          {projects.map((p) => (
            <article className="project-card" key={p.id}>
                            <div className="project-card__media">
                {p.screenshots && p.screenshots.length > 0 ? (
                  <div className="project-card__shots">
                    {p.screenshots.map((s) => (
                      <figure className="project-card__shot" key={s.caption}>
                        <img src={s.src} alt={s.alt} loading="lazy" />
                        <figcaption>{s.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="project-card__placeholder" aria-hidden="true">
                    <span>📱</span>
                    <small>Screenshots coming soon</small>
                  </div>
                )}
              </div>

              <div className="project-card__body">
                <span className="project-card__type">{p.type}</span>
                <h3 className="project-card__name">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>

                <ul className="project-card__features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="project-card__tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                {(p.links.github || p.links.demo) && (
                  <div className="project-card__links">
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {p.links.demo && (
                      <a href={p.links.demo} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}