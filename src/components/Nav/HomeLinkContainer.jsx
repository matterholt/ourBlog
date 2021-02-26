// disable conflict with NEXT.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";

import Link from "next/link";

import {homeRoute} from "../../routes/index";

export default function HomeLinkContainer({children, styleattribute}) {
  return (
    <h1>
      <Link href={homeRoute.path}>
        <a className={`${styleattribute}`}>
          {children || homeRoute.name.toUpperCase()}
        </a>
      </Link>
    </h1>
  );
}
HomeLinkContainer.propTypes = {
  styleattribute: PropTypes.string,
  children: PropTypes.element.isRequired,
};
HomeLinkContainer.defaultProps = {
  styleattribute: "",
};
