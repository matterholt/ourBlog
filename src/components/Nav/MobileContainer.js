import HomeLinkContainer from "./HomeLinkContainer";
import LinkContainer from "./LinkContainer";
import SiteName from "../svg/SiteName";
import PageSubtitle from "../general/PageSubtitle";

import { useNavMenuController } from "../../hooks/useNavMenuController"
import { initialMenuState }from '../../lib/initialState'
import { webpageRoutes } from "../../routes/index";

const { routes } = webpageRoutes;

const primaryLinks = routes.filter((route) => route.attribute === "primary");
const secondaryLinks = routes.filter(
  (route) => route.attribute === "secondary"
);

const MenuViewControl = ({ isMobileMenuOpen, menuDispatch }) => {
  if (!isMobileMenuOpen) {
    return (
      <button
        onClick={() => menuDispatch({ type: "openSubMenu" })}
        className="absolute right-2.5 top-2.5 p-2 bg_custom-dark text-white rounded-sm w-24 h-11"
      >
        MENU
      </button>
    );
  } else {
    return (
      <button
        onClick={() => menuDispatch({ type: "closeMenu" })}
        className="absolute right-2.5 top-2.5 p-2 border-2 rounded-sm w-24 h-11"
      >
        CLOSE
      </button>
    );
  }
};

const NavMenu = ({ isMobileMenuOpen, menuDispatch, subRouteView }) => {
  if (isMobileMenuOpen) {
    return (
      <div className="flex relative w-screen">
        <LinkContainer
          styleAttribute="absolute right-0 bg-red-100  flex flex-col w-3/6"
          subRouteView={subRouteView}
          menuDispatch={menuDispatch}
          siteMapRoutes={primaryLinks}
        />
        <LinkContainer
          styleAttribute="absolute bg-blue-100  flex flex-col w-3/6"
          subRouteView={subRouteView}
          menuDispatch={menuDispatch}
          siteMapRoutes={secondaryLinks}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default function MobileContainer() {
    const [navMenuState, menuDispatch] = useNavMenuController(initialMenuState);
    const { isMobileMenuOpen, subRouteView } = navMenuState;
  
    return (
      <div className="m-5 flex flex-wrap flex-row justify-between items-start">
        <HomeLinkContainer>
          <SiteName styles="m-auto" />
          <PageSubtitle />
          <NavMenu
            isMobileMenuOpen={isMobileMenuOpen}
            subRouteView={subRouteView}
            menuDispatch={menuDispatch}
          />
        </HomeLinkContainer>
        <MenuViewControl
          isMobileMenuOpen={isMobileMenuOpen}
          menuDispatch={menuDispatch}
        />
      </div>
    );
}