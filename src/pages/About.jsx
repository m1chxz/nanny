import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import { siteConfig } from "../data/siteConfig.js";

const values = [
  {
    icon: "shield",
    title: "Confianza",
    text: "Actuamos con transparencia y honestidad con familias y con profesionales.",
  },
  {
    icon: "heart",
    title: "Calidez",
    text: "Creemos que el buen cuidado empieza por el buen trato y el respeto.",
  },
  {
    icon: "users",
    title: "Cercanía",
    text: "Escuchamos cada necesidad para recomendar el perfil que realmente encaja.",
  },
  {
    icon: "star",
    title: "Excelencia",
    text: "Cuidamos los detalles del proceso porque sabemos lo que está en juego.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Una agencia creada para cuidar lo que más importa"
        subtitle="Nanny nace para hacer más fácil, segura y humana la búsqueda de personal doméstico."
      />

      <section className="section">
        <div className="container split split--center">
          <Reveal>
            <span className="eyebrow">Nuestra historia</span>
            <h2>Familias tranquilas, profesionales valorados</h2>
            <p className="lead">
              Sabemos lo difícil que es encontrar a alguien de confianza para tu hogar. También
              sabemos cuánto valor tiene el trabajo de quienes cuidan, cocinan y acompañan cada día.
            </p>
            <p className="lead">
              Por eso construimos un puente entre ambas partes: un proceso cuidadoso, claro y
              respetuoso que beneficia a todos.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="about-card">
              <h3>{siteConfig.name} en cifras</h3>
              <ul>
                {siteConfig.stats.map((s) => (
                  <li key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Nuestros valores"
              title="Lo que guía cada decisión"
              subtitle="Principios que se reflejan en cómo trabajamos y en cómo te tratamos."
            />
          </Reveal>
          <div className="reasons reasons--four">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="reason">
                <div className="reason__icon">
                  <Icon name={v.icon} size={22} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
