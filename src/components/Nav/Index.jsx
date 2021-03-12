import {webpageRoutes} from "../../webpageRoutes/index";

import {useSetScreenView} from "../../hooks/useSetScreenView";

import DesktopMenu from "./DesktopMenu";
import SiteTitle from "./home/SiteTitle";
import MobileMenu from "./MobileMenu";

const navContainerStyle = "flex justify-between";

/*
Future Thought!
Possible to be one component?
have a global style for mobile and have it set but
the useSetScreenView.
*/
export default function Nav() {
  const screenView = useSetScreenView();


  if (screenView === undefined) {
    return null;
  }

  if (screenView.screen === "desktop") {
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
  if (screenView.screen === "mobile") {
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
}
