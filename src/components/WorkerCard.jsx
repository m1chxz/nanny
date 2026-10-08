import Icon from "./Icon.jsx";
import { getServiceById } from "../data/services.js";
import { getInitials } from "../data/workers.js";

export default function WorkerCard({ worker, onView }) {
  const service = getServiceById(worker.serviceId);

  return (
    <article className="worker-card">
      <div className="worker-card__photo">
        {worker.photo ? (
          <img src={worker.photo} alt={`Foto de ${worker.name}`} loading="lazy" />
        ) : (
          <span>{getInitials(worker.name)}</span>
        )}
        <span className="badge">{worker.modality}</span>
      </div>

      <div className="worker-card__body">
        <p className="worker-card__service">{service?.title}</p>
        <h3>{worker.name}</h3>
        <ul className="worker-card__meta">
          <li>
            <Icon name="star" size={16} /> {worker.experience} de experiencia
          </li>
          <li>
            <Icon name="calendar" size={16} /> Disponibilidad: {worker.availability}
          </li>
        </ul>
        <p className="worker-card__desc">{worker.description}</p>
        <button type="button" className="btn btn-outline btn-block" onClick={() => onView(worker)}>
          Ver perfil
        </button>
      </div>
    </article>
  );
}
