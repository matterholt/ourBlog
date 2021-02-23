// disable conflict with NEXT.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import Link from "next/link";

export default function LinkRoutePath({ path, name, menuDispatch }) {
  return (
    <Link href={path}>
      <a
        type="button"
        onClick={() => menuDispatch({ type: "closeAll" })}
        className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4"
      >
        {name}
      </a>
    </Link>
  );
}

LinkRoutePath.propTypes = {
  path: PropTypes.string.isRequired,
  menuDispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
