import LinkRoutes from "./LinkRoutes"
import SocialLinks from "./SocialLinks";

import {
  webpageRoutes,
} from "../../routes/index";

export default function Nav() {
  return (
    <nav
      className="mb-4 text-gray-100 container w-full items-center grid grid-col-3"
      style={{ backgroundColor: "#E3B8A7" }}
    >
      <LinkRoutes  webpageRoutes={webpageRoutes} />
      <SocialLinks />
    </nav>
  );}


