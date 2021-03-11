import {useEffect, useState} from "react";
import {useViewScreenSize} from "./useViewScreenSize";

const DeskTopMenuState = {
  screen: "desktop",

};
const MobileMenuState = {
  screen: "mobile",

};

function useScreenView() {
  const {mobileBreak, screenWidth} = useViewScreenSize();
  const [screenView, setView] = useState(undefined);

  useEffect(() => {
    if (screenWidth >= mobileBreak) {
      setView(DeskTopMenuState);
    }
    if (screenWidth <= mobileBreak) {
      setView(MobileMenuState);
    }
  }, [screenWidth]);

  return screenView;
}

export {useScreenView};
