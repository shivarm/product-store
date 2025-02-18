import React from "react";
import { it, describe } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../src/components/Navbar";

describe("Header", () => {
  it("should render the Navbar component", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });
});
