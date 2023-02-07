import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { quizContext } from "../../hooks/context/quizContext";
import { CategoryCard } from "./CategoryCard";
import { initialquizState } from "..//..//hooks/context/quizContext";

type MockQuizType = {
  categoryImg: "";
  categoryName: "";
  categoryId: "";
};

const mockDispatch = jest.fn();

const MockCategory = ({
  categoryImg,
  categoryName,
  categoryId,
}: MockQuizType) => {
  return (
    <BrowserRouter>
      <quizContext.Provider
        value={{ quizState: initialquizState, quizDispatch: mockDispatch }}
      >
        <CategoryCard categoryImg="" categoryName="" categoryId="" />
      </quizContext.Provider>
    </BrowserRouter>
  );
};


describe("categorycard testing", () => {
  test("image should be in component", () => {
    render(<MockCategory categoryImg="" categoryName="" categoryId="" />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });

  test('should go to rules page when click on category', () => {
    render(<MockCategory categoryImg="" categoryName="" categoryId="" />);
    const categoryCardElement = screen.getByTestId('categoryCard');
    fireEvent.click(categoryCardElement);
    expect(window.location.pathname).toBe('/rules-page');
  })
});
