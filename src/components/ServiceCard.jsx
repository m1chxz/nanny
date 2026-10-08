import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function ServiceCard({ service, showFeatures = false }) {
  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon name={service.icon} size={26} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>

      {showFeatures && (
        <ul className="service-card__features">
          {service.features.map((f) => (
            <li key={f}>
              <Icon name="check" size={16} />
              {f}
            </li>
          ))}
        </ul>
      )}

      <Link to={`/solicitar-personal?tipo=${service.id}`} className="link-arrow">
        Solicitar <Icon name="arrow" size={16} />
      </Link>
    </article>
  );
}
