export interface EducationItem {
  id: number;
  institution: {
    name: string;
    link?: string;
  };
  carrer: string;
  interval: `${string} - ${string}`;
}

export const educationList: EducationItem[] = [
  {
    id: 1,
    institution: {
      name: "UCSE Catholic University of Santiago del Estero",
      link: "https://www.ucse.edu.ar/",
    },
    carrer: "Computer Engineering",
    interval: "2025 - Now",
  },
  {
    id: 2,
    institution: {
      name: "ICES University Center",
      link: "https://www.ices.edu.ar/superior",
    },
    carrer: "Higher Technician Degree in Software Development",
    interval: "2022 - 2025",
  },
];
