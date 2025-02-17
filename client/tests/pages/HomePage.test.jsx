import React from "react";
import { it, describe } from "vitest";
import { render } from "@testing-library/react";
import  HomePage  from "../../src/pages/HomePage";

describe("Home", () => {
  it("should render the HomePage component", () => {
    render(<HomePage />);
  });
});