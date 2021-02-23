import { useState, useEffect } from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

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
    return <DesktopContainer />;
  }
  return <MobileContainer />;
}