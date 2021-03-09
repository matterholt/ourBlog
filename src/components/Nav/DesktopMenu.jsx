import {useMenuController} from "../../hooks/useMenuController";
import LinkRoute from "./LinkRoute";

const initialMenuState = {
  isMobileMenuOpen: false,
  subRouteView: "close",
};

// change layout base on screen size, small have rows with two cols

const largeScreen = "lg:grid-cols-3 lg:grid-rows-none";
const medScreen = "md:grid-cols-2 md:grid-rows-2";

export default function DesktopMenu({webpageRoutes}) {
  const [navMenuState, menuDispatch] = useMenuController(initialMenuState);
  // need it to control sub menu
  const {subRouteView} = navMenuState;


  // add  a drop down if the sub menu
  return (
    <nav className={`pt-4 items-center grid ${medScreen} ${largeScreen}`}>
      <ul className="flex">
        {webpageRoutes.map((link) => (
          <LinkRoute linkTitle={link.title.toUpperCase()} path={link.path} />
        ))}
      </ul>
    </nav>
  );
}
