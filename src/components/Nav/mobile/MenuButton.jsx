const MenuButton = ({children, clickAction, styleAttrubute}) => (
  <button
    className="navMenu__button"
    style={styleAttrubute}
    onClick={clickAction}
  >
    {children}
  </button>
);

export default MenuButton;
