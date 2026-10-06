import { useState } from "react";
import Section from "../layout/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import { aboutProfile, focusAreas } from "../../data/about.js";

function About() {
  const [activeId, setActiveId] = useState(focusAreas[0].id);
  const active = focusAreas.find((area) => area.id === activeId);

  return (
    <Section id="about" title="About Me">
      <div className="about">
        <Reveal>
          <aside className="about__card">
            <div className="about__avatar" aria-hidden="true">
              IAS
            </div>
            <h3 className="about__name">{aboutProfile.name}</h3>
            <p className="about__role">{aboutProfile.field}</p>

            <dl className="about__facts">
              <div>
                <dt>Focus</dt>
                <dd>{aboutProfile.focus}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>{aboutProfile.education}</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a
                    href={aboutProfile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{aboutProfile.githubUser}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </Reveal>

        <Reveal delay={120}>
          <div className="about__main">
            <p className="about__lead">
              My background is in Computer Science, with practical project
              experience in Android and web development. I like building
              software end to end, from the interface to the server and
              database, and I keep learning by building real projects.
            </p>

            <div className="about__tabs" role="group" aria-label="Focus areas">
              {focusAreas.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  className={`about__tab ${
                    activeId === area.id ? "about__tab--active" : ""
                  }`}
                  aria-pressed={activeId === area.id}
                  onClick={() => setActiveId(area.id)}
                >
                  {area.title}
                </button>
              ))}
            </div>

            <div className="about__panel" aria-live="polite">
              <p>{active.summary}</p>
              <ul className="about__chips" aria-label="Technologies">
                {active.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {active.note && <p className="about__note">{active.note}</p>}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default About;