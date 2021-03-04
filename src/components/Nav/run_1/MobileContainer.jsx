import PropTypes from "prop-types";

import HomeLinkContainer from "./HomeLinkContainer";
import LinkContainer from "./LinkContainer";
import SiteName from "../svg/SiteName";
import PageSubtitle from "../general/PageSubtitle";

import {useNavMenuController} from "../../hooks/useNavMenuController";
import {initialMenuState} from "../../lib/initialState";
import {webpageRoutes} from "../../routes/index";

const {routes} = webpageRoutes;

const primaryLinks = routes.filter((route) => route.attribute === "primary");
const secondaryLinks = routes.filter(
  (route) => route.attribute === "secondary",
);

const MenuViewControl = ({isMobileMenuOpen, menuDispatch}) => {
  if (!isMobileMenuOpen) {
    return (
      <button
        type="button"
        onClick={() => menuDispatch({type: "openSubMenu"})}
        className="absolute text-sm right-3 top-10 p-2 border-2 w-15 h-11 rounded-sm bg_custom-dark text-white "
      >
        MENU
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={() => menuDispatch({type: "closeMenu"})}
      className="absolute text-sm right-3 top-10 p-2 border-2 w-15 h-11 rounded-sm "
    >
      CLOSE
    </button>
  );
};
MenuViewControl.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  menuDispatch: PropTypes.func.isRequired,
};

const NavMenu = ({isMobileMenuOpen, menuDispatch, subRouteView = null}) => {
  if (isMobileMenuOpen) {
    return (
      <div className="w-1/2 relative ">
        <div className="absolute absolute -right-2 top-20 bg_custom-dark">
          <LinkContainer
            styleattribute="flex flex-col w-3/6"
            subRouteView={subRouteView}
            menuDispatch={menuDispatch}
            siteMapRoutes={primaryLinks}
          />
          <LinkContainer
            styleattribute="flex flex-col w-3/6"
            subRouteView={subRouteView}
            menuDispatch={menuDispatch}
            siteMapRoutes={secondaryLinks}
          />
        </div>
      </div>
    );
  }
  return null;
};

NavMenu.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  menuDispatch: PropTypes.func.isRequired,
  subRouteView: PropTypes.string,
};
NavMenu.defaultProps = {
  subRouteView: null,
};

export default function MobileContainer() {
  const [navMenuState, menuDispatch] = useNavMenuController(initialMenuState);
  const {isMobileMenuOpen, subRouteView} = navMenuState;

  return (
    <div className="mt-5 w-screen flex justify-between items-start">
      <div className=" w-3/4 grid items-center text-center px-2">
        <HomeLinkContainer>
          <SiteName styles="m-auto w-48" />
        </HomeLinkContainer>
        <PageSubtitle />
      </div>

      <div>
        <MenuViewControl
          isMobileMenuOpen={isMobileMenuOpen}
          menuDispatch={menuDispatch}
        />
        <NavMenu
          isMobileMenuOpen={isMobileMenuOpen}
          subRouteView={subRouteView}
          menuDispatch={menuDispatch}
        />
      </div>
    </div>
  );
}
