import { useEffect, useRef, useState } from 'react';
import { skillCategories } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const current = skillCategories.find((c) => c.id === active);

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills__inner">
        <h2 className="skills__title">Skills</h2>
        <p className="skills__subtitle">
          আমি যে টেকনোলজি নিয়ে কাজ করি
        </p>

        <div className="skills__tabs" role="tablist" aria-label="Skill categories">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              className={`skills__tab ${active === cat.id ? 'is-active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills__grid" role="tabpanel" key={active}>
          {current.skills.map((skill, i) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card__head">
                <span className="skill-card__name">{skill.name}</span>
                <span className="skill-card__level">{skill.level}%</span>
              </div>
              <div className="skill-card__bar">
                <div
                  className="skill-card__fill"
                  style={{
                    width: visible ? `${skill.level}%` : '0%',
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}