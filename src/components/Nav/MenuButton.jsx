function MenuButton({
  children, clickAction, styleAttribute,
}) {
  return (
    <button
      type="button"
      styleAttribute={`h-5 w-5 ${styleAttribute}`}
      onClick={clickAction}
    >
      {children}
    </button>
  );
}

export default MenuButton;
