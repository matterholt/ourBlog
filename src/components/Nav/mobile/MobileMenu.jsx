import {webpageRoutes} from "../websitePaths";
import {useMenuController} from "../hooks/useMenuControler";

import MenuViewControl from "./MenuViewControl.jsx";
import SiteLinks from "./SiteLinks";

const initialMenuState = {
  isMobileMenuOpen: false,
  subRouteView: "close",
};

export default function MobileMenu() {
  const [navMenuState, menuDispatch] = useMenuController(initialMenuState);

  return (
    <div style={{position: "relative"}}>
      <MenuViewControl
        isMobileMenuOpen={navMenuState.isMobileMenuOpen}
        menuDispatch={menuDispatch}
      />
      <SiteLinks
        webpageRoutes={webpageRoutes.routes}
        navMenuState={navMenuState}
        menuDispatch={menuDispatch}
      />
    </div>
  );
}
