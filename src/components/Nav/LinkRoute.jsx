// disable conflict with NEXT.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";

// able to use the link component for the main routes and the sub-routes
import Link from "next/link";

const anchorStyle = "hover:underline inline-block py-2 px-4 no-underline py-2 px-4";

function LinkRoute({
  linkTitle, path, query = null,
}) {
  return (
    <Link href={{pathname: path, query}}>
      <a className={anchorStyle}>{linkTitle}</a>
    </Link>
  );
}

export default LinkRoute;

LinkRoute.propTypes = {
  linkTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  query: PropTypes.string,
};
LinkRoute.defaultProps = {query: null};
