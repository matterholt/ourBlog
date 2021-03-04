import { Children } from "react";
import {useMenuController} from "../../hooks/useMenuController";

import MenuViewControl from "./mobile/MenuViewControl";
import SiteLinks from "./mobile/SiteLinks";

const initialMenuState = {
  isMobileMenuOpen: false,
  subRouteView: "close",
};


export default function MobileMenu({webpageRoutes, children}) {
  const [navMenuState, menuDispatch] = useMenuController(initialMenuState);

  return (
    <div className="mt-5 w-screen flex justify-between items-start">
      {children}
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
    </div>
  );
}

