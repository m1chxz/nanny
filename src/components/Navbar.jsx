import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { navLinks, ctaLink } from "../data/siteConfig.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" onClick={close} aria-label="Nanny, ir al inicio">
          <Logo />
        </Link>

        <nav className={`navbar__menu ${open ? "is-open" : ""}`} aria-label="Principal">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={close}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to={ctaLink.path} className="btn btn-primary" onClick={close}>
            {ctaLink.label}
          </Link>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir o cerrar menú"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
