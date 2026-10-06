import Navbar from "./components/layout/Navbar.jsx";
import Section from "./components/layout/Section.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import { navLinks } from "./data/navLinks.js";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {navLinks
          .filter((link) => link.id !== "home")
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