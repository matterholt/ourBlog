/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MobileMenu from "../MobileMenu";

import {webpageRoutes} from "../../../webpageRoutes/index";

const MobileMenuState = {
  isMobileMenuOpen: false,
  subRouteView: "close",
};

describe("Test for Mobile Navigation Component", () => {
  test("Initial Render", () => {
    render(
      <MobileMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={MobileMenuState}
      />,
    );
    expect(screen.getByText(/menu/i)).toBeInTheDocument();
  });

  test("Opening and Closing of the main menu", () => {
    render(
      <MobileMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={MobileMenuState}
      />,
    );
    expect(screen.getByRole("button", {name: /menu/i})).toBeInTheDocument();
    userEvent.click(screen.getByText(/menu/i));
    expect(
      screen.getByRole("button", {name: /Close/i}),
    ).toBeInTheDocument();
  });

  test("Contents of the main menu", () => {
    render(
      <MobileMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={MobileMenuState}
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
