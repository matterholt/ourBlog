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

describe("Mobile Navigation Component action performed on SubMenu", () => {
  test("Render of a Sub-menu", () => {
    render(
      <MobileMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={MobileMenuState}
      />,
    );
    userEvent.click(screen.getByText(/menu/i));
    const openSubMenu = screen.queryAllByText(/open subMenu/i);
    expect(openSubMenu[0]).toBeInTheDocument();
  });

  test("Opening Sub-menu", () => {
    render(
      <MobileMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={MobileMenuState}
      />,
    );
    userEvent.click(screen.getByText(/menu/i));
    const openSubMenu = screen.queryAllByText(/open subMenu/i);

    userEvent.click(openSubMenu[0]);
    const closeSubMenu = screen.queryAllByText(/close subMenu/i);
    expect(closeSubMenu[0]).toBeInTheDocument();
  });

  test("Closing of Sub-menu", () => {
    render(
      <MobileMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={MobileMenuState}
      />,
    );
    userEvent.click(screen.getByText(/menu/i));

    const openSubMenu = screen.queryAllByText(/open subMenu/i);
    userEvent.click(openSubMenu[0]);

    const closeSubMenu = screen.queryAllByText(/close subMenu/i);
    userEvent.click(closeSubMenu[0]);

    expect(openSubMenu[0]).toBeInTheDocument();
  });
});
