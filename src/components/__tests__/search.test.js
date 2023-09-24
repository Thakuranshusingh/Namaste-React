import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mock/resListData.json";
import Body from "../Body";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should chnage the restaurant list with Ice text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "ice" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should chnage the restaurant list with top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(7);
});
