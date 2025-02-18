import React from "react";
import { it, describe } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeSelector } from "../../src/components/ThemeSelector";

describe("ThemeSelector", () => {
  it("should render the ThemeSelector component", () => {
    render(<ThemeSelector />);
  });
});
