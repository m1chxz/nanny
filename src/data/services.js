// Lista de servicios. Si agregas uno aquí, aparece solo en Inicio, Servicios,
// el formulario de solicitud y el footer.
// "icon" debe ser un nombre válido de components/Icon.jsx
export const services = [
  {
    id: "ninera",
    icon: "child",
    title: "Niñeras",
    description:
      "Cuidado cariñoso y responsable para tus hijos, desde bebés hasta adolescentes.",
    features: ["Estimulación y juego", "Apoyo con tareas escolares", "Rutinas y alimentación"],
  },
  {
    id: "limpieza",
    icon: "sparkle",
    title: "Personal de limpieza",
    description:
      "Hogares impecables de la mano de profesionales organizados y discretos.",
    features: ["Limpieza general y profunda", "Lavandería y planchado", "Servicio por horas o días"],
  },
  {
    id: "domestica",
    icon: "home",
    title: "Empleadas domésticas",
    description:
      "Apoyo integral para el día a día de tu hogar, con horarios que se adaptan a ti.",
    features: ["Orden y mantenimiento del hogar", "Organización de despensa", "Horarios flexibles"],
  },
  {
    id: "cocina",
    icon: "chef",
    title: "Cocineros/as",
    description:
      "Comidas caseras y saludables, preparadas con esmero para toda tu familia.",
    features: ["Menús semanales", "Dietas especiales", "Cocina para reuniones familiares"],
  },
  {
    id: "cuidadores",
    icon: "care",
    title: "Cuidadores",
    description:
      "Acompañamiento y asistencia para personas que requieren atención personalizada.",
    features: ["Apoyo en rutinas diarias", "Acompañamiento a citas", "Recordatorio de medicación indicada"],
  },
  {
    id: "adultos",
    icon: "users",
    title: "Personal para adultos mayores",
    description:
      "Compañía, respeto y cuidado paciente para quienes más lo merecen.",
    features: ["Acompañamiento diario", "Apoyo en movilidad", "Estimulación y conversación"],
  },
];

export const modalities = [
  {
    id: "interno",
    icon: "home",
    title: "Personal interno",
    description:
      "Vive en el hogar y ofrece disponibilidad continua. Ideal para familias que necesitan apoyo permanente.",
  },
  {
    id: "externo",
    icon: "clock",
    title: "Personal externo",
    description:
      "Cumple un horario definido y regresa a su casa. Perfecto para necesidades por días u horas.",
  },
];

export const getServiceById = (id) => services.find((s) => s.id === id);
