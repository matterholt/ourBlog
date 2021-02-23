// disable conflict with NEXT.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";

import Link from "next/link";

import {homeRoute} from "../../routes/index";

export default function HomeLinkContainer({children, styleAttribute}) {
  return (
    <Link href={homeRoute.path}>
      <a className={`${styleAttribute}`}>
        {children || homeRoute.name.toUpperCase()}
      </a>
    </Link>
  );
}
HomeLinkContainer.propTypes = {
  styleAttribute: PropTypes.string,
  children: PropTypes.element.isRequired,
};
HomeLinkContainer.defaultProps = {
  styleAttribute: "",
};