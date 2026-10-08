// Perfiles de EJEMPLO. Más adelante vendrán del backend (ver services/api.js).
// "photo": déjalo vacío ("") para mostrar iniciales, o pon una ruta como
// "/images/workers/marisol.jpg" (el archivo va en public/images/workers/).
export const workers = [
  {
    id: 1,
    name: "Marisol Vergara",
    serviceId: "ninera",
    photo: "",
    experience: "8 años",
    availability: "Inmediata",
    modality: "Interno",
    description:
      "Niñera con formación en primera infancia. Paciente, creativa y muy organizada con rutinas y juegos educativos.",
    skills: ["Primeros auxilios", "Estimulación temprana", "Apoyo escolar"],
  },
  {
    id: 2,
    name: "Camila Ortega",
    serviceId: "limpieza",
    photo: "",
    experience: "5 años",
    availability: "En 2 semanas",
    modality: "Externo",
    description:
      "Especialista en limpieza profunda y organización de espacios. Puntual, detallista y de total confianza.",
    skills: ["Limpieza profunda", "Planchado", "Organización"],
  },
  {
    id: 3,
    name: "Rosa Elena Pinzón",
    serviceId: "adultos",
    photo: "",
    experience: "12 años",
    availability: "Inmediata",
    modality: "Interno",
    description:
      "Acompañante de adultos mayores con enorme paciencia y calidez. Experiencia en rutinas de movilidad y compañía.",
    skills: ["Acompañamiento", "Apoyo en movilidad", "Cocina suave"],
  },
  {
    id: 4,
    name: "Daniel Cedeño",
    serviceId: "cocina",
    photo: "",
    experience: "10 años",
    availability: "Desde el próximo mes",
    modality: "Externo",
    description:
      "Cocinero de comida casera y saludable. Planifica menús semanales y se adapta a dietas especiales.",
    skills: ["Menús semanales", "Dietas especiales", "Repostería"],
  },
  {
    id: 5,
    name: "Lucía Barrios",
    serviceId: "domestica",
    photo: "",
    experience: "6 años",
    availability: "Inmediata",
    modality: "Externo",
    description:
      "Apoyo doméstico integral: orden, lavandería y mantenimiento del hogar con excelente actitud.",
    skills: ["Orden del hogar", "Lavandería", "Compras del hogar"],
  },
  {
    id: 6,
    name: "Esperanza Quintero",
    serviceId: "cuidadores",
    photo: "",
    experience: "9 años",
    availability: "En 2 semanas",
    modality: "Interno",
    description:
      "Cuidadora con experiencia en acompañamiento personalizado, trato respetuoso y mucha responsabilidad.",
    skills: ["Rutinas diarias", "Acompañamiento a citas", "Recordatorios"],
  },
];

export const getInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
