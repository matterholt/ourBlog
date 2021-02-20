import HomeLinkContainer from "./HomeLinkContainer";
import LinkContainer from "./LinkContainer";
import SiteName from "../svg/SiteName";
import PageSubtitle from "../general/PageSubtitle";

import { useNavMenuController } from "../../hooks/useNavMenuController"
import { initialMenuState }from '../../lib/initialState'
import { webpageRoutes } from "../../routes/index";

const { routes } = webpageRoutes;

const Menu = () => {
  const [navMenuState, menuDispatch] = useNavMenuController(initialMenuState);
  const { isMobileMenuOpen, subRouteView } = navMenuState;

  if (!isMobileMenuOpen) {
    return (
      <button
        onClick={() => menuDispatch({ type: "openSubMenu" })}
        className="p-2 bg_custom-dark text-white rounded-sm w-24 h-11"
      >
        MENU
      </button>
    );
  } else {
    return (
      <div className="bg-red-100 relative">
        <button
          onClick={() => menuDispatch({ type: "closeMenu" })}
          className="p-2 border-2 rounded-sm w-24 h-11"
        >
          CLOSE
        </button>
        <LinkContainer
          styleAttribute="flex-col absolute right-0 bg-white w-36 items-end "
          subRouteView={subRouteView}
          menuDispatch={menuDispatch}
          siteMapRoutes={routes}
        />
      </div>
    );
  }
  }

export default function MobileContainer() {
    return (
      <div className="m-5 flex flex-row justify-between items-start">
        <HomeLinkContainer>
          <SiteName styles="m-auto" />
          <PageSubtitle />
        </HomeLinkContainer>
        <Menu />
      </div>
    );
}