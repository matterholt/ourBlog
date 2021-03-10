/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {render} from "@testing-library/react";
import MobileMenu from "../MobileMenu";

import {webpageRoutes} from "../../../webpageRoutes/index";

const MobileMenuState = {
  isMobileMenuOpen: false,
  subRouteView: "close",
};

describe("Test for desktop Navigation Component", () => {
  test("Test Rendering", () => {
    const {getByRole} = render(
      <MobileMenu
        webpageRoutes={webpageRoutes}
        initialMenuState={MobileMenuState}
      />,
    );

    expect(getByRole("button")).toHaveTextContent(/menu/i);
  });
});

/*
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
*/
