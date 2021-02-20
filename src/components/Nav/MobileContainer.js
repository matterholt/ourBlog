import {useEffect, useState} from 'react'
import HomeLinkContainer from "./HomeLinkContainer";
import LinkContainer from "./LinkContainer";
import SiteName from "../svg/SiteName";
import PageSubtitle from "../general/PageSubtitle";
import { webpageRoutes } from "../../routes/index";

const { routes, routeTitle } = webpageRoutes;

const Menu = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false)
  const [subRouteView, setSubRouteView] = useState("close"); 


  function handleMenu(action, subMenuName=null) {
    // controls the closing menu on mobile screen display
    // useReducer, custom Hook, for desktop version as well ???????

    switch (action) {
      case "openSubMenu":
        setMenuIsOpen(true)
        setSubRouteView(subMenuName);
        break;
      case "closeAll":
        setSubRouteView("close");
        setMenuIsOpen(false);
        break;
      case "closeSubRoute":
        setSubRouteView("close");
        break;
      case "closeMenu":
        setMenuIsOpen(false);
        break
      default:
        throw Error("action undefined");
    }
  }

  
  if (!isMenuOpen) {

  return(
      <button onClick={() => setMenuIsOpen(true)} className="p-2 bg_custom-dark text-white rounded-sm ">
        MENU
      </button>
  )
    
    } else {

        return (
          <div className="bg-red-100 relative ">
            <button
              onClick={() => handleMenu("closeMenu")}
              className="p-2 border-2 rounded-sm "
            >
              CLOSE
            </button>
            <LinkContainer
              styleAttribute="flex-col absolute top-12 right-0 bg-red-200"
              subRouteView={subRouteView}
              handleMenu={handleMenu}
              siteMapRoutes={routes}
            />
          </div>
        );
    }
  }

export default function MobileContainer() {
    return (
      <div className="m-5 flex flex-row justify-between items-center">
        <HomeLinkContainer >
          <SiteName styles="m-auto" />
          <PageSubtitle />
        </HomeLinkContainer>
        <Menu />
      </div>
    );
}