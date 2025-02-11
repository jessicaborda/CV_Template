import PropTypes from "prop-types";

export const IconText = ({
  iconPath,
  text,
  iconSize = 20,
  textSize = "text-base",
  iconClassName = "icon",
  textClassName = "text",
}) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={iconPath}
        alt="icon"
        style={{ width: iconSize, height: iconSize }}
        className={iconClassName} // Clase dinámica para el icono
      />
      <span className={`${textSize} ${textClassName}`}>{text}</span>{" "}
      {/* Clase dinámica para el texto */}
    </div>
  );
};

IconText.propTypes = {
  iconPath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  textSize: PropTypes.string,
  iconClassName: PropTypes.string, // Nueva prop para estilos de icono
  textClassName: PropTypes.string, // Nueva prop para estilos de texto
};
