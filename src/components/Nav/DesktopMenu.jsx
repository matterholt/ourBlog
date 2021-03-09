import {useMenuController} from "../../hooks/useMenuController";
import LinkRoute from "./LinkRoute";

import MainMenu from "./MainMenu";

const largeScreen = "lg:grid-cols-3 lg:grid-rows-none";
const medScreen = "md:grid-cols-2 md:grid-rows-2";

export default function DesktopMenu({children, webpageRoutes, initialMenuState}) {
  const [navMenuState, menuDispatch] = useMenuController(initialMenuState);
  return (
    <div className={`pt-4 items-center grid ${medScreen} ${largeScreen}`}>
      {children}
      <MainMenu
        cssStyleAttribute="flex"
        navMenuState={navMenuState}
        menuDispatch={menuDispatch}
        webpageRoutes={webpageRoutes}
      />
    </div>
  );
}
