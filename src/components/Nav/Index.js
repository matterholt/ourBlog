import LinkRoutes from "./LinkRoutes"
import SocialLinks from "./SocialLinks";
import HomeLink from "./HomeLink"

import Logo from "../svg/Logo"

import { webpageRoutes, homeRoute } from "../../routes/index";

export default function Nav() {
  return (
    <nav
      className="mb-4 mx-auto text-gray-100 container w-full items-center grid grid-col-3"
      style={{ backgroundColor: "#E3B8A7" }}
    >
      <HomeLink >
        <Logo/>
      </HomeLink>
      <LinkRoutes webpageRoutes={webpageRoutes} />
      <SocialLinks />
    </nav>
  );}


