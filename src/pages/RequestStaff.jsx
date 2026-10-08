import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { services, modalities } from "../data/services.js";
import { submitStaffRequest } from "../services/api.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+\d\s()-]{7,}$/;

const emptyForm = {
  fullName: "",
  phone: "",
  email: "",
  serviceType: "",
  modality: "",
  startDate: "",
  quantity: 1,
  city: "",
  message: "",
};

const benefits = [
  "Respuesta personalizada a tu solicitud",
  "Perfiles revisados y con referencias",
  "Sin compromiso al enviar el formulario",
];

export default function RequestStaff() {
  const [params] = useSearchParams();
  const preselected = params.get("tipo");

  const [form, setForm] = useState({
    ...emptyForm,
    serviceType: services.some((s) => s.id === preselected) ? preselected : "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Escribe tu nombre completo.";
    if (!phoneRegex.test(form.phone)) e.phone = "Ingresa un teléfono válido.";
    if (!emailRegex.test(form.email)) e.email = "Ingresa un correo válido.";
    if (!form.serviceType) e.serviceType = "Selecciona el tipo de personal.";
    if (!form.modality) e.modality = "Elige una modalidad.";
    if (!form.startDate) e.startDate = "Indica una fecha aproximada.";
    if (Number(form.quantity) < 1) e.quantity = "Debe ser al menos 1.";
    if (!form.city.trim()) e.city = "Indica tu ciudad.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");
    try {
      await submitStaffRequest(form);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(emptyForm);
    setErrors({});
    setStatus("idle");
  };

  return (
    <>
      <PageHeader
        eyebrow="Solicitar personal"
        title="Cuéntanos qué necesitas"
        subtitle="Completa el formulario y nuestro equipo se pondrá en contacto contigo."
      />

      <section className="section">
        <div className="container form-layout">
          <div className="benefits">
            <h3>Lo que puedes esperar</h3>
            <ul>
              {benefits.map((b) => (
                <li key={b}>
                  <span className="benefits__check">
                    <Icon name="check" size={16} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <Reveal>
            {status === "success" ? (
              <div className="form-card success-card">
                <div className="success-card__icon">
                  <Icon name="check" size={34} />
                </div>
                <h3>¡Solicitud enviada!</h3>
                <p>Gracias, {form.fullName.split(" ")[0]}. Nos pondremos en contacto contigo muy pronto.</p>
                <div className="success-card__actions">
                  <Link to="/" className="btn btn-primary">
                    Volver al inicio
                  </Link>
                  <button type="button" className="btn btn-outline" onClick={reset}>
                    Enviar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form className="form-card" onSubmit={handleSubmit} noValidate>
                {status === "error" && (
                  <p className="alert alert--error">No pudimos enviar tu solicitud. Inténtalo de nuevo.</p>
                )}

                <div className="form-grid">
                  <label className="field field--full">
                    <span className="field__label">Nombre completo</span>
                    <input className="input" name="fullName" value={form.fullName} onChange={handleChange} autoComplete="name" />
                    {errors.fullName && <span className="field__error">{errors.fullName}</span>}
                  </label>

                  <label className="field">
                    <span className="field__label">Teléfono</span>
                    <input className="input" type="tel" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" />
                    {errors.phone && <span className="field__error">{errors.phone}</span>}
                  </label>

                  <label className="field">
                    <span className="field__label">Correo electrónico</span>
                    <input className="input" type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" />
                    {errors.email && <span className="field__error">{errors.email}</span>}
                  </label>

                  <label className="field field--full">
                    <span className="field__label">Tipo de personal que busca</span>
                    <select className="input" name="serviceType" value={form.serviceType} onChange={handleChange}>
                      <option value="">Selecciona una opción</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && <span className="field__error">{errors.serviceType}</span>}
                  </label>

                  <div className="field field--full">
                    <span className="field__label">Modalidad</span>
                    <div className="segmented">
                      {modalities.map((m) => (
                        <label key={m.id} className={form.modality === m.id ? "is-selected" : ""}>
                          <input
                            type="radio"
                            name="modality"
                            value={m.id}
                            checked={form.modality === m.id}
                            onChange={handleChange}
                          />
                          {m.title}
                        </label>
                      ))}
                    </div>
                    {errors.modality && <span className="field__error">{errors.modality}</span>}
                  </div>

                  <label className="field">
                    <span className="field__label">Fecha aproximada de inicio</span>
                    <input className="input" type="date" name="startDate" min={today} value={form.startDate} onChange={handleChange} />
                    {errors.startDate && <span className="field__error">{errors.startDate}</span>}
                  </label>

                  <label className="field">
                    <span className="field__label">Cantidad de personas</span>
                    <input className="input" type="number" name="quantity" min="1" value={form.quantity} onChange={handleChange} />
                    {errors.quantity && <span className="field__error">{errors.quantity}</span>}
                  </label>

                  <label className="field field--full">
                    <span className="field__label">Ciudad</span>
                    <input className="input" name="city" value={form.city} onChange={handleChange} autoComplete="address-level2" />
                    {errors.city && <span className="field__error">{errors.city}</span>}
                  </label>

                  <label className="field field--full">
                    <span className="field__label">Mensaje adicional (opcional)</span>
                    <textarea
                      className="input"
                      name="message"
                      rows="4"
                      placeholder="Horarios, idiomas, experiencia deseada, detalles de tu hogar…"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={status === "sending"}>
                  {status === "sending" ? "Enviando…" : "Enviar solicitud"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
