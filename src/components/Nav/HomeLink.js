import Link from 'next/link'

import Title from "../svg/SiteName"

import {
  homeRoute,
} from "../../routes/index";


export default function HomeLink({ children }) {
  return (
    <Link href={homeRoute.path}>
      <a>
        {children || homeRoute.name.toUpperCase()}
        {/* <Title /> */}
      </a>
    </Link>
  );
}