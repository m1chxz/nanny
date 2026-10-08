import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import { steps, faqs } from "../data/process.js";

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="Cómo funciona"
        title="Un proceso claro, de principio a fin"
        subtitle="Te acompañamos en cada etapa para que contrates con total tranquilidad."
      />

      <section className="section">
        <div className="container timeline">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} className="timeline__item">
              <div className="timeline__icon">
                <Icon name={step.icon} size={26} />
              </div>
              <div>
                <span className="timeline__number">Paso {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--sand">
        <div className="container container--narrow">
          <Reveal>
            <SectionTitle eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />
          </Reveal>
          <div className="faq">
            {faqs.map((item) => (
              <Reveal key={item.q}>
                <details>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
