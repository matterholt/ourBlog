import {webpageRoutes} from "../../webpageRoutes/index";

import {useScreenView} from "../../hooks/useScreenView";

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
  const screenView = useScreenView();

  if (screenView === undefined) { return (null); }

  if (screenView.screen === "desktop") {
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
  if (screenView.screen === "mobile") {
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
  return (null);
}
