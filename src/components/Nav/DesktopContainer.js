import { useState } from "react";
import LinkContainer from "./LinkContainer";
import HomeLinkContainer from "./HomeLinkContainer";
import SiteName from "../svg/SiteName";
import PageSubtitle from "../general/PageSubtitle"
import Logo from "../svg/Logo";


import { webpageRoutes, homeRoute } from "../../routes/index";

const primaryLinks = webpageRoutes.filter(
  (route) => route.attribute === "primary"
);
const secondaryLinks = webpageRoutes.filter(
  (route) => route.attribute === "secondary"
);




// change layout base on screen size, small have rows with two cols

const xLargeScreen = "xl:grid-cols-3 xl:grid-rows-none"; 
const largeScreen = "lg:grid-cols-2 lg:grid-rows-2"; 


export default function DesktopContainer() {
  const [ subRouteView, setSubRouteView] = useState("close"); 

    return (
      <nav className={`pt-4 items-center grid ${largeScreen} ${xLargeScreen}`}>
        <LinkContainer
          styleAttribute={
            "lg:row-start-2 lg:col-span-1 xl:col-start-1 xl:row-start-1"
          }
          webpageRoutes={primaryLinks}
          subRouteView={subRouteView}
          setSubRouteView={setSubRouteView}
        />

        <HomeLinkContainer
          styleAttribute={
            "lg:row-start-1 lg:col-span-full xl:col-span-1 justify-self-center text-center m-auto bg-white"
          }
        >
          <SiteName styles="m-auto" />
          <PageSubtitle />
        </HomeLinkContainer>

        <LinkContainer
          styleAttribute={
            "lg:row-start-2 lg:col-span-2 xl:col-start-3 xl:row-start-1"
          }
          webpageRoutes={secondaryLinks}
          subRouteView={subRouteView}
          setSubRouteView={setSubRouteView}
        />
      </nav>
    );
}