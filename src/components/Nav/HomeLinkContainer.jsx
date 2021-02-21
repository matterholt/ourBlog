import Link from "next/link";

import Title from "../svg/SiteName";

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
