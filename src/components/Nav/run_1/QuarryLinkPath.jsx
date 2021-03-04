// disable conflict with NEXT.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import Link from "next/link";

export default function QuarryLinkPath({link, menuDispatch}) {
  const {tag, path} = link;

  return (
    <li>
      <Link
        href={{
          pathname: path,
          query: {tag},
        }}
      >
        <a className="hover:underline inline-block py-4 px-4 no-underline py-2 px-4">
          <button
            type="button"
            onClick={() => menuDispatch({type: "closeAll"})}
          >
            {tag}
          </button>
        </a>
      </Link>
    </li>
  );
}

QuarryLinkPath.propTypes = {
  link: PropTypes.shape({
    attribute: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    path: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  menuDispatch: PropTypes.func.isRequired,
};
