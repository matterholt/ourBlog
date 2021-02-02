import LinkRoutes from "./LinkRoutes"
import SocialLinks from "./SocialLinks";

import {
  webpageRoutes,
  homeRoute,
  blogRoutes,
  socialRoutes,
} from "../../routes/index";

export default function Nav({ children }) {
  return (
    <nav className="container w-full flex justify-between">
      <LinkRoutes homeRoute={homeRoute}webpageRoutes={webpageRoutes} />
      <SocialLinks />
    </nav>
  );}


