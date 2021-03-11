import {useViewScreenSize} from "../../hooks/useViewScreenSize";
import {webpageRoutes} from "../../webpageRoutes/index";

import DesktopMenu from "./DesktopMenu";
import SiteTitle from "./home/SiteTitle";
import MobileMenu from "./MobileMenu";

const DeskTopMenuState = {
  isMobileMenuOpen: true,
  subRouteView: "close",
};
const MobileMenuState = {
  isMobileMenuOpen: false,
  subRouteView: "close",
};

const navContainerStyle = "flex justify-between";

export default function Nav() {

  // change to if state is desktop dispaly
  const {mobileBreak, screenWidth} = useViewScreenSize();

  if (screenWidth === undefined) {
    return null;
  }
  if (screenWidth >= mobileBreak) {
    return (
      <nav className={navContainerStyle}>
        <DesktopMenu
          webpageRoutes={webpageRoutes}
          initialMenuState={DeskTopMenuState}
        >
          <SiteTitle />
        </DesktopMenu>
      </nav>
    );
  }
  return (
    <nav className={navContainerStyle}>
      <MobileMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={MobileMenuState}
      >
        <SiteTitle />

      </MobileMenu>
    </nav>
  );
}
