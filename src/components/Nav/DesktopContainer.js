import { useState } from "react";
import LinkContainer from "./LinkContainer";
import HomeLinkContainer from "./HomeLinkContainer";
import SiteName from "../svg/SiteName";
import PageSubtitle from "../general/PageSubtitle"

import { webpageRoutes } from "../../routes/index";



const primaryLinks = webpageRoutes.filter(
  (route) => route.attribute === "primary"
);
const secondaryLinks = webpageRoutes.filter(
  (route) => route.attribute === "secondary"
);


// change layout base on screen size, small have rows with two cols

const xLargeScreen = "lg:grid-cols-3 lg:grid-rows-none"; 
const largeScreen = "md:grid-cols-2 md:grid-rows-2"; 

export default function DesktopContainer() {
  const [ subRouteView, setSubRouteView] = useState("close"); 

    return (
      <nav className={`pt-4 items-center grid ${largeScreen} ${xLargeScreen}`}>
        <LinkContainer
          styleAttribute={
            "md:row-start-2 md:col-span-1 lg:col-start-1 lg:row-start-1"
          }
          webpageRoutes={primaryLinks}
          subRouteView={subRouteView}
          setSubRouteView={setSubRouteView}
        />

        <HomeLinkContainer
          styleAttribute={
            "md:row-start-1 md:col-span-full lg:col-span-1 justify-self-center text-center m-auto bg-white"
          }
        >
          <SiteName styles="m-auto" />
          <PageSubtitle />
        </HomeLinkContainer>

        <LinkContainer
          styleAttribute={
            "md:row-start-2 md:col-span-2 lg:col-start-3 lg:row-start-1"
          }
          webpageRoutes={secondaryLinks}
          subRouteView={subRouteView}
          setSubRouteView={setSubRouteView}
        />
      </nav>
    );
}