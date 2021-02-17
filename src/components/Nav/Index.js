import LinkRoutes from "./LinkRoutes"
import SocialLinks from "./SocialLinks";
import HomeLink from "./HomeLink"
import Logo from "../svg/Logo"

import { webpageRoutes, homeRoute } from "../../routes/index";

export default function Nav() {



  return (
    <nav
      className="text-gray-100 items-center grid grid-col-3"
      style={{ backgroundColor: "#E3B8A7" }}
    >
      
      

      <LinkRoutes webpageRoutes={webpageRoutes} />
      {/* <SocialLinks /> */}
    </nav>
  );}


