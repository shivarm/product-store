import React from "react";
import { it, describe } from "vitest";
import { render } from "@testing-library/react";
import { Navbar } from "../../src/components/Navbar";

describe("Header", () => {
  it("should render the Navbar component", () => {
    render(<Navbar />);
  });
});
