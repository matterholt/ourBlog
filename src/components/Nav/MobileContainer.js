import { useEffect, useState, useReducer } from "react";
import HomeLinkContainer from "./HomeLinkContainer";
import LinkContainer from "./LinkContainer";
import SiteName from "../svg/SiteName";
import PageSubtitle from "../general/PageSubtitle";

import { useNavMenuController } from "../../hooks/useNavMenuController"
import {initialMenuState}from '../../lib/initialState'
import { webpageRoutes } from "../../routes/index";

const { routes, routeTitle } = webpageRoutes;



const Menu = () => {
  const [navMenuState, menuDispatch] = useNavMenuController(initialMenuState);
  const { isMobileMenuOpen, subRouteView } = navMenuState;

  
  if (!isMobileMenuOpen) {
    return (
      <button
        onClick={() => menuDispatch({ type: "openSubMenu" })}
        className="p-2 bg_custom-dark text-white rounded-sm "
      >
        MENU
      </button>
    );
  } else {
    return (
      <div className="bg-red-100 relative ">
        <button
          onClick={() => menuDispatch({ type: "closeMenu" })}
          className="p-2 border-2 rounded-sm "
        >
          CLOSE
        </button>
        <LinkContainer
          styleAttribute="flex-col absolute top-12 right-0 bg-red-200"
          subRouteView={subRouteView}
          menuDispatch={menuDispatch}
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