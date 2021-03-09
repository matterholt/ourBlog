import MenuViewControl from "./mobileNav/MenuViewControl";
import MainMenu from "./mobileNav/MainMenu";

import {webpageRoutes} from "../../webpageRoutes/index";
import {useMenuController} from "../../hooks/useMenuController";

const initialMenuState = {
  isMobileMenuOpen: false,
  subRouteView: "close",
};

export default function MobileMenu() {
  const [navMenuState, menuDispatch] = useMenuController(initialMenuState);

  
  return (

    <div className="relative mr-10">
      <MenuViewControl
        isMobileMenuOpen={navMenuState.isMobileMenuOpen}
        menuDispatch={menuDispatch}
      >

        <MainMenu
          webpageRoutes={webpageRoutes.routes}
          navMenuState={navMenuState}
          menuDispatch={menuDispatch}
        />
      </MenuViewControl>
    </div>

  );
}
