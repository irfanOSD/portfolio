import Button from "../ui/Button.jsx";

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
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
          <Button href="/resume.pdf" variant="secondary" download>
            Download Resume
          </Button>
          <Button href="#contact" variant="ghost">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;