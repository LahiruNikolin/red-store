import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../index";

describe("Header", () => {
  test("displays the logo", () => {
    render(<Header />);
    expect(screen.getByText("Metaprop")).toBeInTheDocument();
  });

  test("navigates to the home page when clicked", () => {
    jest.mock("next/router", () => ({
      useRouter: () => ({ push: jest.fn() }),
    }));

    render(<Header />);
  });

  test("displays the page name", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("displays the user avatar", () => {
    render(<Header />);
  });

  test("displays the user name", () => {
    render(<Header />);
    expect(screen.getByText("Mike")).toBeInTheDocument();
  });
});
