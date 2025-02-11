import { TextColumn } from "../../../injectors/textColumn";
import "./Experience.css";

const experienceData = [
  {
    title: "Asistente de Diseño en Figma",
    date: "Jun 2024 - Ene 2025",
    institution: "MolBor Construcciones",
    listItems: [
      "Creación de prototipos de alta fidelidad en Figma para el diseño de la página web de la empresa.",
      "Desarrollo de la identidad visual de la marca, incluyendo logotipos, colores y tipografías.",
      "Diseño de contenido gráfico para redes sociales, alineado con la estrategia de marketing digital.",
    ],
  },
  {
    title: "Diseñadora 3D",
    date: "Oct 2020 - May 2024",
    institution: "MolBor Construcciones",
    listItems: [
      "Modelado y texturizado de objetos 3D para proyectos de arquitectura y diseño de interiores.",
      "Creación de animaciones y renderizados para presentaciones y propuestas de proyectos.",
      "Colaboración con equipos multidisciplinarios para asegurar la coherencia visual en proyectos.",
    ],
  },
];

export const Experience = () => {
  return (
    <>
      <div className="experience-container">
        <h2>Experiencia</h2>
        <div>
          {experienceData.map((exp, index) => (
            <TextColumn
              key={index}
              text1={exp.title}
              text2={exp.date}
              text3={exp.institution}
              listItems={exp.listItems}
              customStyles={{
                text1: { color: "var(--color-primary)", fontSize: "14px" },
                text2: { color: "var(--color-secondary)", fontSize: "14px" },
                text3: { color: "var(--color-secondary)", fontSize: "14px" },
                listItem: { color: "var(--color-text)", fontSize: "12px" },
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
