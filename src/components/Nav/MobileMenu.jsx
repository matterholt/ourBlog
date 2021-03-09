import MenuViewControl from "./MenuViewControl";
import MainMenu from "./MainMenu";

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
          cssStyleAttribute="absolute top-24 right-0 bg-gray-200"
          webpageRoutes={webpageRoutes.routes}
          navMenuState={navMenuState}
          menuDispatch={menuDispatch}
        />
      </MenuViewControl>
    </div>
  );
}
