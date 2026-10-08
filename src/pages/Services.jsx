import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import { services, modalities } from "../data/services.js";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Personal para cada necesidad de tu hogar"
        subtitle="Desde el cuidado de los más pequeños hasta el acompañamiento de adultos mayores. Todo en un solo lugar."
      />

      <section className="section">
        <div className="container grid grid-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 100}>
              <ServiceCard service={service} showFeatures />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Modalidades"
              title="Elige el formato que mejor se adapte a ti"
              subtitle="Ofrecemos personal interno y externo según tu rutina familiar."
            />
          </Reveal>
          <div className="grid grid-2">
            {modalities.map((m, i) => (
              <Reveal key={m.id} delay={i * 120}>
                <article className="service-card">
                  <div className="service-card__icon">
                    <Icon name={m.icon} size={26} />
                  </div>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
