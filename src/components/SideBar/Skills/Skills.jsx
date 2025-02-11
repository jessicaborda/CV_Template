import { IconComponent } from "../../../injectors/iconComponent";
import "./Skills.css";

const skillsData = [
  {
    iconPath: "/assets/template/html_icon.svg",
    altText: "htmlIcon",
    title: "HTML",
  },

  {
    iconPath: "/assets/template/javascript_icon.svg",
    altText: "javascriptIcon",
    title: "JS",
  },
  {
    iconPath: "/assets/template/css_icon.svg",
    altText: "cssIcon",
    title: "CSS",
  },
  {
    iconPath: "/assets/template/react_icon.svg",
    altText: "reactIcon",
    title: "REACT",
  },

  {
    iconPath: "/assets/template/figma_icon.svg",
    altText: "figmaIcon",
    title: "FIGMA",
  },

  {
    iconPath: "/assets/template/sketchup_icon.svg",
    altText: "sketchupIcon",
    title: "SKETCHUP",
  },
];

export const Skills = () => {
  const styles = {
    width: "40px",
    height: "auto",
  };

  return (
    <>
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="icon-container">
          {skillsData.map((skill, index) => (
            <IconComponent
              key={index}
              iconPath={skill.iconPath}
              altText={skill.altText}
              title={skill.title}
              style={styles}
            />
          ))}
        </div>
      </div>
    </>
  );
};
