import { TextColumn } from "../../../injectors/textColumn";
import "./Portfolio.css";

const portfolioData = [
  {
    title: "VisualCode",
    description:
      "Página web para visualización de ejercicios de lógica realizados en JS y React, con implementación de layouts específicos para cada ejercicio.",
  },
  {
    title: "CV Template",
    description:
      "Página web para la generación de currículums personalizables con opciones de color y estilos.",
  },
  {
    title: "Proyectos GitHub",
    description:
      "Repositorio con estos y otros proyectos desarrollados en JavaScript, React y tecnologías relacionadas.",
  },
];

export const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container">
        <h2>Portafolio</h2>
        <div className="portfolio">
          {portfolioData.map((project, index) => (
            <TextColumn
              key={index}
              text1={project.title}
              text3={project.description}
              customStyles={{
                text1: { color: "var(--color-primary)", fontSize: "14px" },
                text3: {
                  color: "var(--color-text)",
                  fontSize: "12px",
                  marginBottom: "10px",
                },
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
