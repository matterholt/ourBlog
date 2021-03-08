import {useState, useEffect} from "react";
// import DesktopContainer from "./DesktopContainer";
import {webpageRoutes} from "../../routes/index";

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
  // if (screenWidth >= mobileBreak) {
  //   return <DesktopContainer />;
  // }
  return (
    <div className="w-screen flex">

      <SiteTitle />
      <MobileMenu webpageRoutes={webpageRoutes} />
    </div>

  );
}
