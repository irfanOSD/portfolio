import { contactLinks } from "../../data/contact.js";

function Footer() {
  // Email is shown on the Contact section with a copy button, so the footer
  // keeps only the external profile links.
  const socialLinks = contactLinks.filter((link) => link.external);

  return (
    <footer className="footer">
      <ul className="footer__links" aria-label="Social links">
        {socialLinks.map(({ id, label, href, icon: Icon }) => (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="footer__link"
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <p>© {new Date().getFullYear()} Irfan Alam Sourav</p>
    </footer>
  );
}

export default Footer;