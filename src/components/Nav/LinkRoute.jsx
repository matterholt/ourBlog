// disable conflict with NEXT.js
/* eslint-disable jsx-a11y/anchor-is-valid */

// able to use the link component for the main routes and the sub-routes
import Link from "next/link";

const anchorStyle = "hover:underline inline-block py-2 px-4 no-underline py-2 px-4"


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
