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
