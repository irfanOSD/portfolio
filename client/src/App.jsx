import Navbar from "./components/layout/Navbar.jsx";
import Section from "./components/layout/Section.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import { navLinks } from "./data/navLinks.js";

const builtSections = ["home", "about", "skills"];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {navLinks
          .filter((link) => !builtSections.includes(link.id))
          .map((link) => (
            <Section key={link.id} id={link.id} title={link.label}>
              <div className="section__placeholder">
                {link.label} section: Planned (পরের ধাপগুলোতে বানানো হবে)
              </div>
            </Section>
          ))}
      </main>
      <Footer />
    </>
  );
}

export default App;