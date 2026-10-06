import Navbar from "./components/layout/Navbar.jsx";
import Section from "./components/layout/Section.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Journey from "./components/sections/Journey.jsx";
import Resume from "./components/sections/Resume.jsx";
import Contact from "./components/sections/Contact.jsx";
import { navLinks } from "./data/navLinks.js";

// যে সেকশন বানানো হয়ে গেছে: id → কম্পোনেন্ট
const sectionComponents = {
  home: Hero,
  about: About,
  skills: Skills,
  projects: Projects,
  journey: Journey,
  resume: Resume,
  contact: Contact,
};

function App() {
  return (
    <>
      <Navbar />
      <main>
        {navLinks.map((link) => {
          const SectionComponent = sectionComponents[link.id];
          if (SectionComponent) {
            return <SectionComponent key={link.id} />;
          }
          return (
            <Section key={link.id} id={link.id} title={link.label}>
              <div className="section__placeholder">
                {link.label} section: Planned (পরের ধাপগুলোতে বানানো হবে)
              </div>
            </Section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;