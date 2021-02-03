import Link from 'next/link'

import Title from "../svg/Title"

import {
  homeRoute,
} from "../../routes/index";


export default function HomeLink() {
    return (
      <Link href={homeRoute.path}>
        <a >
          <Title />
        </a>
      </Link>
    );
}