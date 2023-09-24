import {
  getAllByRole,
  getAllByText,
  render,
  screen,
} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load the component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load the button", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Should load the input button", () => {
  //Render
  render(<Contact />);

  //Querying
  const inputbox = screen.getAllByRole("textbox");

  //Assert
  expect(inputbox.length).toBe(2);
});
