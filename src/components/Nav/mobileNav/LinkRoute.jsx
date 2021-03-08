// disable conflict with NEXT.js
/* eslint-disable jsx-a11y/anchor-is-valid */

// able to use the link component for the main routes and the sub-routes
import Link from "next/link";

const LinkRoute = ({
  menuDispatch, name, path, query = null, styleAttribute = null,
}) => {
  const classStyle = typeof styleAttribute === "string";
  const childClass = classStyle ? styleAttribute : "";

  return (
    <Link href={{pathname: path, query}}>
      <a className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4">
        <button
          className={childClass}
          type="button"
          onClick={() => menuDispatch({type: "closeMenus"})}
        >
          {name}
        </button>
      </a>
    </Link>
  );
};

export default LinkRoute;
