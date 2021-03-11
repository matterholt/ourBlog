import {useEffect, useState} from "react";
import {useViewScreenSize} from "./useViewScreenSize";

const DeskTopMenuState = {
  screen: "desktop",
  menuState: {
    isMobileMenuOpen: true,
    subRouteView: "close",
  },
};
const MobileMenuState = {
  screen: "mobile",
  menuState: {
    isMobileMenuOpen: false,
    subRouteView: "close",
  },
};

function useScreenView() {
  const {mobileBreak, screenWidth} = useViewScreenSize();
  const [screenView, setView] = useState(undefined);

  useEffect(() => {
    if (screenWidth >= mobileBreak) {
      setView(MobileMenuState);
    }
    if (screenWidth <= mobileBreak) {
      setView(DeskTopMenuState);
    }
  }, [screenWidth]);

  return screenView;
}

export {useScreenView};
