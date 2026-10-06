import { useEffect, useState } from "react";
import { navLinks, sectionIds } from "../../data/navLinks.js";
import useActiveSection from "../../hooks/useActiveSection.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the menu if the window grows to desktop size
  useEffect(() => {
    const query = window.matchMedia("(min-width: 901px)");
    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <a href="#home" className="navbar__logo">
          Irfan<span>.</span>
        </a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="nav-menu"
          className={`navbar__list ${menuOpen ? "navbar__list--open" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__link ${
                  activeId === link.id ? "navbar__link--active" : ""
                }`}
                aria-current={activeId === link.id ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;