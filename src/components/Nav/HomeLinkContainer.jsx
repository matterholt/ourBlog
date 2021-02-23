// disable conflict with NEXT.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";

import { homeRoute } from "../../routes/index";

export default function HomeLinkContainer({ children, styleAttribute }) {
  return (
    <Link href={homeRoute.path}>
      <a className={`${styleAttribute}`}>
        {children || homeRoute.name.toUpperCase()}
      </a>
    </Link>
  );
}
