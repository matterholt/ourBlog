import LinkContainer from "./LinkContainer";
import HomeLinkContainer from "./HomeLinkContainer";
import SiteName from "../svg/SiteName";
import Logo from "../svg/Logo";

import { webpageRoutes, homeRoute } from "../../routes/index";

const primaryLinks = webpageRoutes.filter(
  (route) => route.attribute === "primary"
);
const secondaryLinks = webpageRoutes.filter(
  (route) => route.attribute === "secondary"
);

const Subtitle = () => (
  <p className="text-xl md:text-xs m-5 text-gray-500">
    Realistic step to clean and beautiful living for the whole family
  </p>
);




export default function DesktopContainer() {
    return (
      <nav
        className="md:container md:items-center md:grid md:grid-cols-3 pt-4"
        // style={{ borderBottom: "2px solid #E3B8A7" }}
      >
        <LinkContainer webpageRoutes={primaryLinks} styleAttribute={""} />
        {/* <SocialLinks /> */}
        <HomeLinkContainer
          styleAttribute={"justify-self-center text-center m-auto bg-white"}
        >
          <SiteName styles="m-auto" />
          <Subtitle />
        </HomeLinkContainer>
        <LinkContainer webpageRoutes={secondaryLinks} styleAttribute={""} />
      </nav>
    );
}