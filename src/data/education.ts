export interface EducationItem {
  id: number;
  institution: {
    name: string;
    link?: string;
  };
  carrer: string;
  interval: string;
}

export const educationList: EducationItem[] = [
  {
    id: 1,
    institution: {
      name: "home.education.ucse.name",
      link: "https://www.ucse.edu.ar/",
    },
    carrer: "home.education.computerEngineering",
    interval: "home.education.ucse.interval",
  },
  {
    id: 2,
    institution: {
      name: "home.education.ices.name",
      link: "https://www.ices.edu.ar/superior",
    },
    carrer: "home.education.higherTechnician",
    interval: "home.education.ices.interval",
  },
];
