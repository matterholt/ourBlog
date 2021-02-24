/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {render, screen} from "@testing-library/react";
import Index from "../Index";

describe("Test for Navigation Component", () => {
  test("Test Rendering", () => {
    render(<Index />);
    // debug();
    // console.log(screen);

    const servicesLink = screen.getByText(/services/i);
    expect(servicesLink).toBeInTheDocument();
  });
});
