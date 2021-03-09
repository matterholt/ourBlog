import {useMenuController} from "../../hooks/useMenuController";
import MainMenu from "./MainMenu";

// tailwind screen styles settings
const largeScreen = "lg:grid-cols-3 lg:grid-rows-none";
const medScreen = "md:grid-cols-2 md:grid-rows-2";

export default function DesktopMenu({children, webpageRoutes, initialMenuState}) {
  const [navMenuState, menuDispatch] = useMenuController(initialMenuState);

  const primaryLinks = webpageRoutes.filter(
    (route) => route.attribute === "primary",
  );
  const secondaryLinks = webpageRoutes.filter(
    (route) => route.attribute === "secondary",
  );

  return (
    <div className={`w-screen pt-4 items-center grid ${medScreen} ${largeScreen}`}>
      <MainMenu
        cssStyleAttribute="flex justify-evenly"
        navMenuState={navMenuState}
        menuDispatch={menuDispatch}
        webpageRoutes={primaryLinks}
      />
      <div className="col-start-2">{children}</div>
      <MainMenu
        cssStyleAttribute="flex justify-evenly"
        navMenuState={navMenuState}
        menuDispatch={menuDispatch}
        webpageRoutes={secondaryLinks}
      />
    </div>
  );
}
