import PropTypes from "prop-types";

import {useMenuController} from "../../hooks/useMenuController";
import MainMenu from "./components/MainMenu";

// tailwind screen styles settings
const largeScreen = "lg:grid-cols-3 lg:grid-rows-none";
const medScreen = "md:grid-cols-2 md:grid-rows-2";

export default function DesktopMenu({ children, webpageRoutes, initialMenuState }) {
  
  const [navMenuState, menuDispatch] = useMenuController(initialMenuState);
  const {routes} = webpageRoutes;

  const primaryLinks = routes.filter((route) => route.attribute === "primary");
  const secondaryLinks = routes.filter(
    (route) => route.attribute === "secondary",
  );

  return (
    <div
      className={`w-screen pt-4 items-center grid ${medScreen} ${largeScreen}`}
    >
      <MainMenu
        cssStyleAttribute="flex justify-evenly md:row-start-2 md:col-span-1 lg:col-start-1 lg:row-start-1 items-center"
        navMenuState={navMenuState}
        menuDispatch={menuDispatch}
        webpageRoutes={primaryLinks}
      />
      <div className=" lg:col-start-2 lg:row-start-1 lg:col-span-1 md:col-span-full">
        {children}
      </div>
      <MainMenu
        cssStyleAttribute="flex justify-evenly md:row-start-2 md:col-span-2 lg:col-start-3 lg:row-start-1 items-center"
        navMenuState={navMenuState}
        menuDispatch={menuDispatch}
        webpageRoutes={secondaryLinks}
      />
    </div>
  );
}

DesktopMenu.propTypes = {
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
DesktopMenu.defaultProps = {
  children: null,

};

