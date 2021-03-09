import {useMenuController} from "../../hooks/useMenuController";

import MenuViewControl from "./MenuViewControl";
import MainMenu from "./MainMenu";

export default function MobileMenu({children, initialMenuState, webpageRoutes}) {
  const [navMenuState, menuDispatch] = useMenuController(initialMenuState);

  return (
    <div className="w-screen flex justify-between ">
      {children}
      <div className="relative">
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
    </div>
  );
}
