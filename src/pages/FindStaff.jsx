import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import WorkerCard from "../components/WorkerCard.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import { getWorkers } from "../services/api.js";
import { services, getServiceById } from "../data/services.js";
import { getInitials } from "../data/workers.js";

function ProfileModal({ worker, onClose }) {
  const service = getServiceById(worker.serviceId);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={`Perfil de ${worker.name}`}
      onClick={onClose}
    >
      <div className="modal__card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>

        <div className="modal__head">
          <div className="avatar">
            {worker.photo ? <img src={worker.photo} alt="" /> : getInitials(worker.name)}
          </div>
          <div>
            <p className="worker-card__service">{service?.title}</p>
            <h3>{worker.name}</h3>
          </div>
        </div>

        <p className="modal__text">{worker.description}</p>

        <ul className="chips">
          {worker.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <dl className="modal__facts">
          <div>
            <dt>Experiencia</dt>
            <dd>{worker.experience}</dd>
          </div>
          <div>
            <dt>Disponibilidad</dt>
            <dd>{worker.availability}</dd>
          </div>
          <div>
            <dt>Modalidad</dt>
            <dd>{worker.modality}</dd>
          </div>
        </dl>

        <Link to={`/solicitar-personal?tipo=${worker.serviceId}`} className="btn btn-primary btn-block">
          Solicitar este perfil
        </Link>
      </div>
    </div>
  );
}

export default function FindStaff() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [serviceId, setServiceId] = useState("todos");
  const [modality, setModality] = useState("todas");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let active = true;
    getWorkers().then((data) => {
      if (active) {
        setWorkers(data);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(
    () =>
      workers.filter((w) => {
        const matchName = w.name.toLowerCase().includes(query.trim().toLowerCase());
        const matchService = serviceId === "todos" || w.serviceId === serviceId;
        const matchModality = modality === "todas" || w.modality === modality;
        return matchName && matchService && matchModality;
      }),
    [workers, query, serviceId, modality]
  );

  return (
    <>
      <PageHeader
        eyebrow="Encuentra tu personal"
        title="Conoce a profesionales listos para ayudarte"
        subtitle="Explora perfiles por tipo de servicio y modalidad. Los perfiles mostrados son de ejemplo."
      />

      <section className="section">
        <div className="container">
          <div className="filters">
            <label className="field">
              <span className="field__label">Buscar por nombre</span>
              <input
                className="input"
                type="search"
                placeholder="Ej. Marisol"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <label className="field">
              <span className="field__label">Tipo de servicio</span>
              <select className="input" value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
                <option value="todos">Todos</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span className="field__label">Modalidad</span>
              <select className="input" value={modality} onChange={(e) => setModality(e.target.value)}>
                <option value="todas">Todas</option>
                <option value="Interno">Interno</option>
                <option value="Externo">Externo</option>
              </select>
            </label>
          </div>

          {loading ? (
            <p className="empty">Cargando perfiles…</p>
          ) : filtered.length === 0 ? (
            <p className="empty">No encontramos perfiles con esos filtros. Prueba con otra combinación.</p>
          ) : (
            <div className="grid grid-3">
              {filtered.map((worker, i) => (
                <Reveal key={worker.id} delay={(i % 3) * 100}>
                  <WorkerCard worker={worker} onView={setSelected} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="¿No encuentras lo que buscas?"
        text="Cuéntanos tus necesidades y buscaremos el perfil ideal para tu familia."
      />

      {selected && <ProfileModal worker={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
