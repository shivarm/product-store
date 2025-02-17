import React from "react";
import { it, describe } from "vitest";
import { render } from "@testing-library/react";
import  ProductPage  from "../../src/pages/ProductPage";

describe("Produts", () => {
  it("should render the ProductPage component", () => {
    render(<ProductPage />);
  });
});