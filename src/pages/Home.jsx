import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import { services } from "../data/services.js";
import { steps } from "../data/process.js";
import { siteConfig } from "../data/siteConfig.js";

const reasons = [
  {
    icon: "shield",
    title: "Personal verificado",
    text: "Revisamos identidad, referencias y experiencia antes de presentarte a cualquier candidato.",
  },
  {
    icon: "heart",
    title: "Ajuste a tu familia",
    text: "Buscamos el perfil que encaje con tu hogar, tus rutinas y tu forma de vivir.",
  },
  {
    icon: "clock",
    title: "Respuesta ágil",
    text: "Entendemos que a veces la necesidad es urgente. Te atendemos con rapidez y claridad.",
  },
  {
    icon: "care",
    title: "Acompañamiento continuo",
    text: "No desaparecemos después de la contratación: seguimos disponibles para ti.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">Personal doméstico de confianza</span>
            <h1>
              El cuidado que tu hogar merece, en las <em>mejores manos</em>
            </h1>
            <p>
              Conectamos familias con niñeras, cuidadores, personal de limpieza y cocina,
              seleccionados con criterio y cariño.
            </p>
            <div className="hero__actions">
              <Link to="/solicitar-personal" className="btn btn-primary btn-lg">
                Solicitar personal <Icon name="arrow" size={18} />
              </Link>
              <Link to="/encuentra-tu-personal" className="btn btn-outline btn-lg">
                Explorar perfiles
              </Link>
            </div>
            <ul className="hero__trust">
              {siteConfig.stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__ring" />
            <div className="hero__blob" />
            <div className="hero__arch">
              <svg viewBox="0 0 64 64">
                <path d="M32 47S16 38 16 26a9 9 0 0116-5.6A9 9 0 0148 26c0 12-16 21-16 21z" />
              </svg>
            </div>
            <div className="float-card float-card--one">
              <Icon name="shield" size={22} />
              <div>
                <strong>Personal verificado</strong>
                <span>Referencias comprobadas</span>
              </div>
            </div>
            <div className="float-card float-card--two">
              <Icon name="clock" size={22} />
              <div>
                <strong>Respuesta rápida</strong>
                <span>Te acompañamos desde el inicio</span>
              </div>
            </div>
            <div className="float-card float-card--three">
              <Icon name="heart" size={22} />
              <div>
                <strong>Trato cálido</strong>
                <span>Cuidado con cariño</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Nuestros servicios"
              title="Todo el apoyo que tu hogar necesita"
              subtitle="Personal capacitado para cada etapa y cada necesidad de tu familia."
            />
          </Reveal>
          <div className="grid grid-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ NANNY */}
      <section className="section section--sand">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Por qué Nanny</span>
            <h2>Confianza que se construye con cada detalle</h2>
            <p className="lead">
              Sabemos que abrir las puertas de tu casa es una decisión importante. Por eso cuidamos
              cada paso del proceso, con transparencia y respeto.
            </p>
            <Link to="/nosotros" className="btn btn-outline">
              Conoce Nanny
            </Link>
          </Reveal>
          <div className="reasons">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90} className="reason">
                <div className="reason__icon">
                  <Icon name={r.icon} size={22} />
                </div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PASOS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Cómo funciona"
              title="Contratar nunca fue tan sencillo"
              subtitle="Un proceso claro, en cuatro pasos."
            />
          </Reveal>
          <div className="steps">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90} className="step">
                <span className="step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="center-action">
            <Link to="/como-funciona" className="btn btn-outline">
              Ver el proceso completo
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
