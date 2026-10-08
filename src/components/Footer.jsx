import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";
import { siteConfig, navLinks, ctaLink } from "../data/siteConfig.js";
import { services } from "../data/services.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>{siteConfig.description}</p>
          <ul className="footer__socials">
            {siteConfig.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Servicios</h4>
          <ul className="footer__links">
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/servicios">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Empresa</h4>
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to={ctaLink.path}>{ctaLink.label}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="mail" size={18} /> {siteConfig.email}
            </li>
            <li>
              <Icon name="phone" size={18} /> {siteConfig.phone}
            </li>
            <li>
              <Icon name="pin" size={18} /> {siteConfig.address}
            </li>
            <li>
              <Icon name="clock" size={18} /> {siteConfig.schedule}
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p>Política de privacidad · Términos del servicio</p>
      </div>
    </footer>
  );
}
