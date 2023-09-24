import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import DATA from "../mock/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurant card component with props data", () => {
  render(<RestaurantCard resData={DATA} />);

  const name = screen.getByText("KFC");

  expect(name).toBeInTheDocument();
});
