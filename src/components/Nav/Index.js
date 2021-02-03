import LinkRoutes from "./LinkRoutes"
import SocialLinks from "./SocialLinks";
import HomeLink from "./HomeLink";

import {
  webpageRoutes,
  homeRoute,
  blogRoutes,
  socialRoutes,
} from "../../routes/index";

export default function Nav() {
  return (
    <nav
      className="p-2 text-gray-100 container w-full items-center grid grid-col-3"
      style={{ backgroundColor: "#E3B8A7" }}
    >
      <div className="col-start-1 "><HomeLink/></div>
      <LinkRoutes  webpageRoutes={webpageRoutes} />
      <SocialLinks />
    </nav>
  );}


