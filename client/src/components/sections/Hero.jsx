import { lazy, Suspense, useRef, useState } from "react";
import Button from "../ui/Button.jsx";
import useReducedMotion from "../../hooks/useReducedMotion.js";
import useInView from "../../hooks/useInView.js";
import { isWebGLAvailable } from "../../utils/webgl.js";

// The 3D code is loaded only when needed, so the text appears first
const HeroScene = lazy(() => import("../../three/HeroScene.jsx"));

// Change to true after you add client/public/resume.pdf
const RESUME_AVAILABLE = true;

function Hero() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);
  const reducedMotion = useReducedMotion();
  const [webglOk] = useState(isWebGLAvailable);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const showScene = !reducedMotion && webglOk;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero"
      aria-labelledby="hero-title"
    >
      {showScene && (
        <div className="hero__canvas" aria-hidden="true">
          <Suspense fallback={null}>
            <HeroScene isMobile={isMobile} active={inView} />
          </Suspense>
        </div>
      )}

      <div className="container hero__content">
        <p className="hero__eyebrow">Hello, world</p>
        <h1 id="hero-title" className="hero__title">
          Hi, I'm <span className="hero__name">Irfan Alam Sourav</span>
        </h1>
        <p className="hero__subtitle">
          Computer Science Engineer | Android & Web Developer
        </p>
        <p className="hero__intro">
          I build Android apps with Kotlin and Java, and web applications
          with Node.js and MySQL.
        </p>

        <div className="hero__actions">
          <Button href="#projects">View Projects</Button>

          {RESUME_AVAILABLE ? (
            <Button href="/resume.pdf" variant="secondary" download>
              Download Resume
            </Button>
          ) : (
            <button
              type="button"
              className="btn btn--secondary"
              disabled
            >
              Resume Coming Soon
            </button>
          )}

          <Button href="#contact" variant="ghost">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;