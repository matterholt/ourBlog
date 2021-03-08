const MenuButton = ({children, clickAction, className, styleAttrubute}) => (
  <button
    type="button"
    className={className}
    style={styleAttrubute}
    onClick={clickAction}
  >
    {children}
  </button>
);

export default MenuButton;
