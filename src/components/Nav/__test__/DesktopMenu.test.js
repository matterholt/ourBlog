/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    render(
      <DesktopMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={DeskTopMenuState}
      />,
    );
    userEvent.click(screen.getByText(/menu/i));

    expect(screen.getByText(/close/i)).toBeInTheDocument();

    // might not need to have all this.
    expect(screen.getByText(/service/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
    expect(screen.getByText(/opportunity/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
