const LinkButton = ({styleAttribute, menuDispatch, children}) => {
  const classStyle = typeof styleAttribute === "string";
  const childClass = classStyle ? styleAttribute : "";

  return (
    <button
      className={childClass}
      type="button"
      onClick={() => menuDispatch({type: "closeMenus"})}
    >
      {children}
    </button>
  );
};

export default LinkButton;
