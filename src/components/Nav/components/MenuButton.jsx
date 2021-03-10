import PropTypes from "prop-types";

function MenuButton({
  children, clickAction, styleAttribute,
}) {
  
  return (
    <button
      type="button"
      className={styleAttribute}
      onClick={clickAction}
    >
      {children}
    </button>
  );
}

export default MenuButton;

MenuButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  clickAction: PropTypes.func.isRequired,
  styleAttribute: PropTypes.string,
};
MenuButton.defaultProps = {
  children: null,
  styleAttribute: "",
};
