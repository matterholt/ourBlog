const LinkButton = ({ styleAttribute, menuDispatch, children }) => {
  
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
