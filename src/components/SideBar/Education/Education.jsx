import { TextColumn } from "../../../injectors/textColumn";
import "./Education.css";

const educationData = [
  {
    title: "Arquitecta",
    date: "2019 - 2024",
    institution: "Universidad Pedagógica y Tecnológica de Colombia",
  },
  {
    title: "Diseño UX/UI",
    date: "2024 - 2025",
    institution: "Educación Autodidacta (Curso Online)",
  },
  {
    title: "React Developer",
    date: "2024 - 2025",
    institution: "Educación Autodidacta (Curso Online)",
  },
];

export const Education = () => {
  return (
    <>
      <div className="education">
        <h2>Educación</h2>
        <div className="education-container">
          {educationData.map((item, index) => (
            <TextColumn
              key={index}
              text1={item.title}
              text2={item.date}
              text3={item.institution}
            />
          ))}
        </div>
      </div>
    </>
  );
};
