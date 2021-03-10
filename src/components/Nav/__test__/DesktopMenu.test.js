/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {render} from "@testing-library/react";
import DesktopMenu from "../DesktopMenu";

// import the web routes js file
import {webpageRoutes} from "../../../webpageRoutes/index";

// default state
const DeskTopMenuState = {
  isMobileMenuOpen: true,
  subRouteView: "close",
};

describe("Test for desktop Navigation Component", () => {
  test("Test Rendering", () => {
    const {getByText} = render(
      <DesktopMenu
        webpageRoutes={webpageRoutes.routes}
        initialMenuState={DeskTopMenuState}
      />,
    );

    getByText(/service/i);
    getByText(/about/i);
    getByText(/blog/i);
    getByText(/shop/i);
    getByText(/opportunity/i);
    getByText(/contact/i);
  });
});
