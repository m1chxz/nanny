import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";

export default function CtaBanner({
  title = "Encuentra hoy al apoyo ideal para tu hogar",
  text = "Cuéntanos qué necesitas y te acompañamos en cada paso del proceso.",
}) {
  return (
    <section className="section section--cta">
      <div className="container">
        <Reveal className="cta-banner">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link to="/solicitar-personal" className="btn btn-light btn-lg">
            Solicitar personal <Icon name="arrow" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
