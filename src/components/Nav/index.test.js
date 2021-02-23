import React from "react";
import {render} from "@testing-library/react";
import Index from "./Index";

describe("Test for App", () => {
  test("Test Rendering", () => {
    const {getByTestId} = render(<Index />);
    expect(getByTestId("content")).toBeInTheDocument();
  });
});
