import {useState}from 'react'
import LinkContainer from "./LinkContainer";
import HomeLinkContainer from "./HomeLinkContainer";
import SiteName from "../svg/SiteName";
import Logo from "../svg/Logo";


import { webpageRoutes, homeRoute } from "../../routes/index";

const primaryLinks = webpageRoutes.filter(
  (route) => route.attribute === "primary"
);
const secondaryLinks = webpageRoutes.filter(
  (route) => route.attribute === "secondary"
);

const Subtitle = () => (
  <p className="text-xl md:text-xs m-5 text-gray-500">
    Realistic step to clean and beautiful living for the whole family
  </p>
);


// change layout base on screen size, small have rows with two cols

export default function DesktopContainer() {
  const [subRouteView, setSubRouteView] = useState("close"); 

    return (
      <nav
        className="md:container md:items-center md:grid md:grid-cols-3 pt-4"
        // style={{ borderBottom: "2px solid #E3B8A7" }}
      >
        
        <LinkContainer
          webpageRoutes={primaryLinks}
          styleAttribute={""}
          subRouteView={subRouteView}
          setSubRouteView={setSubRouteView}
        />

        <HomeLinkContainer
          styleAttribute={"justify-self-center text-center m-auto bg-white"}
        >
          <SiteName styles="m-auto" />
          <Subtitle />
        </HomeLinkContainer>
        <LinkContainer
          webpageRoutes={secondaryLinks}
          styleAttribute={""}
          // subRouteViewController={{ subRouteView, setSubRouteView }}
        />
      </nav>
    );
}