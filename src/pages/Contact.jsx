import { useState } from "react";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { submitContactMessage } from "../services/api.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Escribe tu nombre.";
    if (!emailRegex.test(form.email)) newErrors.email = "Ingresa un correo válido.";
    if (form.message.trim().length < 10) newErrors.message = "Cuéntanos un poco más (mínimo 10 caracteres).";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");
    try {
      await submitContactMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const info = [
    { icon: "mail", label: "Correo", value: siteConfig.email },
    { icon: "phone", label: "Teléfono", value: siteConfig.phone },
    { icon: "pin", label: "Dirección", value: siteConfig.address },
    { icon: "clock", label: "Horario", value: siteConfig.schedule },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Hablemos, estamos para ayudarte"
        subtitle="Escríbenos y resolveremos tus dudas con gusto."
      />

      <section className="section">
        <div className="container form-layout">
          <div className="info-list">
            {info.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="info-card">
                  <div className="info-card__icon">
                    <Icon name={item.icon} size={22} />
                  </div>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <form className="form-card" onSubmit={handleSubmit} noValidate>
              <h3>Envíanos un mensaje</h3>

              {status === "success" && (
                <p className="alert alert--success">¡Gracias! Recibimos tu mensaje y te responderemos pronto.</p>
              )}
              {status === "error" && (
                <p className="alert alert--error">No pudimos enviar el mensaje. Inténtalo de nuevo.</p>
              )}

              <div className="form-grid">
                <label className="field field--full">
                  <span className="field__label">Nombre</span>
                  <input className="input" name="name" value={form.name} onChange={handleChange} autoComplete="name" />
                  {errors.name && <span className="field__error">{errors.name}</span>}
                </label>
                <label className="field field--full">
                  <span className="field__label">Correo electrónico</span>
                  <input className="input" type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" />
                  {errors.email && <span className="field__error">{errors.email}</span>}
                </label>
                <label className="field field--full">
                  <span className="field__label">Mensaje</span>
                  <textarea className="input" name="message" rows="5" value={form.message} onChange={handleChange} />
                  {errors.message && <span className="field__error">{errors.message}</span>}
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
