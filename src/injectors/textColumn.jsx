import PropTypes from "prop-types";

export const TextColumn = ({
  text1,
  text2,
  text3,
  listItems,
  customStyles = {},
}) => {
  const defaultStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    text1: {
      color: "var(--color-third)",
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "25px",
    },
    text2: {
      color: "var(--color-third)",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "25px",
    },
    text3: {
      color: "var(--color-third)",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "25px",
    },
    list: {
      marginTop: "5px",
      paddingLeft: "15px",
    },
    listItem: {
      color: "var(--color-secondary)",
      fontSize: "12px",
      lineHeight: "20px",
    },
  };

  // Fusionar estilos por defecto con los personalizados
  const styles = {
    container: { ...defaultStyles.container, ...customStyles.container },
    text1: { ...defaultStyles.text1, ...customStyles.text1 },
    text2: { ...defaultStyles.text2, ...customStyles.text2 },
    text3: { ...defaultStyles.text3, ...customStyles.text3 },
    list: { ...defaultStyles.list, ...customStyles.list },
    listItem: { ...defaultStyles.listItem, ...customStyles.listItem },
  };

  return (
    <div style={styles.container}>
      {text1 && <span style={styles.text1}>{text1}</span>}
      {text2 && <span style={styles.text2}>{text2}</span>}
      {text3 && <span style={styles.text3}>{text3}</span>}
      {listItems && listItems.length > 0 && (
        <ul style={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Definir tipos de propiedades
TextColumn.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
  customStyles: PropTypes.object, // Objeto de estilos personalizado
};
