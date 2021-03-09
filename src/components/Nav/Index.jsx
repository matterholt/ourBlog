import {useState, useEffect} from "react";
import DesktopMenu from "./DesktopMenu";
import {webpageRoutes} from "../../webpageRoutes/index";

import SiteTitle from "./home/SiteTitle";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  const [screenWidth, setScreenWidth] = useState(undefined);
  const mobileBreak = 768;

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
      <div className="w-screen flex justify-between">
        <SiteTitle />
        <DesktopMenu webpageRoutes={webpageRoutes.routes} />
        ;
      </div>
    );
  }
  return (
    <div className="w-screen flex justify-between">
      <SiteTitle />
      <MobileMenu webpageRoutes={webpageRoutes} />
    </div>

  );
}
