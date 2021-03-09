import PropTypes from "prop-types";

const LinkButton = ({styleAttribute, menuDispatch, children}) => {
  const objectClass = typeof styleAttribute === "object" ? styleAttribute : null;
  const childClass = typeof styleAttribute === "string" ? styleAttribute : "";

  return (
    <button
      style={objectClass}
      className={`${childClass}`}
      type="button"
      onClick={() => menuDispatch({type: "closeMenus"})}
    >
      {children}
    </button>
  );
};
export default LinkButton;

LinkButton.propTypes = {
  styleAttribute: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  menuDispatch: PropTypes.func.isRequired,
  children: PropTypes.element,
};
LinkButton.defaultProps = {
  styleAttribute: "",
  children: null,
};
