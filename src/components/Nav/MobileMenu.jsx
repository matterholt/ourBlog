import PropTypes from "prop-types";
import {useMenuController} from "../../hooks/useMenuController";

import MenuViewControl from "./components/MenuViewControl";
import MainMenu from "./components/MainMenu";

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

MobileMenu.propTypes = {
  children: PropTypes.element,
  initialMenuState: PropTypes.shape({
    isMobileMenuOpen: PropTypes.bool,
    subRouteView: PropTypes.string,
  }).isRequired,
  webpageRoutes: PropTypes.shape({
    routeTitle: PropTypes.string,
    routes: PropTypes.array,
  }).isRequired,
};
MobileMenu.defaultProps = {
  children: null,
};
