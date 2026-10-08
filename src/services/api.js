import { workers } from "../data/workers.js";

// ─────────────────────────────────────────────────────────────
// CAPA DE DATOS: hoy usa datos locales. Cuando tengas backend,
// solo cambias el interior de estas funciones por llamadas fetch.
// Las páginas no tendrán que modificarse.
// ─────────────────────────────────────────────────────────────

// Cuando exista el backend, crea un archivo .env con:
// VITE_API_URL=http://localhost:4000
const API_URL = import.meta.env.VITE_API_URL ?? "";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getWorkers() {
  // FUTURO:
  // const res = await fetch(`${API_URL}/api/workers`);
  // return res.json();
  await wait(400);
  return workers;
}

export async function submitStaffRequest(data) {
  // FUTURO:
  // const res = await fetch(`${API_URL}/api/requests`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) throw new Error("Error al enviar la solicitud");
  // return res.json();
  await wait(800);
  console.log("Solicitud de personal:", data);
  return { ok: true };
}

export async function submitContactMessage(data) {
  // FUTURO: POST a `${API_URL}/api/contact`
  await wait(800);
  console.log("Mensaje de contacto:", data);
  return { ok: true };
}
