import {webpageRoutes} from "../../webpageRoutes/index";

import {useScreenView} from "../../hooks/useScreenView";

import DesktopMenu from "./DesktopMenu";
import SiteTitle from "./home/SiteTitle";
import MobileMenu from "./MobileMenu";

const navContainerStyle = "flex justify-between";

export default function Nav() {
  const screenView = useScreenView();

  console.log(screenView);

  if (screenView.screen === undefined) { return (null); }

  if (screenView.screen === "mobile") {
    return (
      <nav className={navContainerStyle}>
        <DesktopMenu
          webpageRoutes={webpageRoutes}
          initialMenuState={screenView.menuState}
        >
          <SiteTitle />
        </DesktopMenu>
      </nav>
    );
  }
  if (screenView.screen === "desktop") {
    return (
      <nav className={navContainerStyle}>
        <MobileMenu
          webpageRoutes={webpageRoutes}
          initialMenuState={screenView.menuState}
        >
          <SiteTitle />
        </MobileMenu>
      </nav>
    );
  }
  return (null);
}
