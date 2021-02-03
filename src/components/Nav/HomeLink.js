import Link from 'next/link'

import Title from "../svg/Title"

import {
  homeRoute,
} from "../../routes/index";


export default function HomeLink({ children }) {
  return (
    <Link href={homeRoute.path}>
      <a>
        {children || 'HOME'} 
        {/* <Title /> */}
      </a>
    </Link>
  );
}