import { IconText } from "../../../injectors/iconText";
import "./Details.css";

const detailsData = [
  { iconPath: "/assets/template/Ubicacion_icon.svg", text: "Colombia" },
  { iconPath: "/assets/template/Home_Icon.svg", text: "Tunja, Boyacá" },
  {
    iconPath: "/assets/template/Correo_icon.svg",
    text: "jessi.borda09@gmail.com",
  },
  { iconPath: "/assets/template/Celular_icon.svg", text: "+57 320 443 1290" },
];

export const Details = () => {
  return (
    <>
      <div className="details-container">
        <img className="photo" src="/assets/template/Foto.png" alt="" />
        <h2>Información Personal</h2>
        <div className="info-container">
          {detailsData.map((item, index) => (
            <IconText
              key={index}
              iconPath={item.iconPath}
              text={item.text}
              iconClassName="icon" // Color del icono
              textClassName="text" // Estilos de texto
            />
          ))}
        </div>
      </div>
    </>
  );
};
