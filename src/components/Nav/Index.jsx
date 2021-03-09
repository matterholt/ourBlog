import {useState, useEffect} from "react";
import DesktopMenu from "./DesktopMenu";
import {webpageRoutes} from "../../webpageRoutes/index";

import SiteTitle from "./home/SiteTitle";
import MobileMenu from "./MobileMenu";



/*

have the menus initial state be passed at this level,

if desktop the apply desktop settings other wise pass pass the mobile

differences
-  open main menu
- css style

!!!
instead of mounting and unmounting between the two desktop and mobile navigation
just change the style with the state

*/

const DeskTopMenuState = {
  isMobileMenuOpen: true,
  subRouteView: "close",
};
const MobileMenuState = {
  isMobileMenuOpen: false,
  subRouteView: "close",
};


export default function Nav() {
  const [screenWidth, setScreenWidth] = useState(undefined);
  const mobileBreak = 768;

  // make custom hook
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
    return null;
  }, []);

  if (screenWidth === undefined) {
    return null;
  }
  if (screenWidth >= mobileBreak) {
    return (
      <nav className="w-screen flex justify-between">
        <SiteTitle />
        <DesktopMenu
          webpageRoutes={webpageRoutes.routes}
          initialMenuState={DeskTopMenuState}
        />
      </nav>
    );
  }
  return (
    <nav className="w-screen flex justify-between">
      <SiteTitle />
      <MobileMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={MobileMenuState}
      />
    </nav>
  );
}
