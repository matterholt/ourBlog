/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {render} from "@testing-library/react";
import DesktopContainer from "../DesktopContainer";

describe("Test for desktop Navigation Component", () => {
  test("Test Rendering", () => {
    const {getByTitle, getByText} = render(<DesktopContainer />);
    getByTitle("Root + Blush");
    getByText(/service/i);
    getByText(/about/i);
    getByText(/blog/i);
    getByText(/shop/i);
    getByText(/opportunity/i);
    getByText(/contact/i);
  });
});
