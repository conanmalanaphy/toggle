import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";

test("TodoComponent renders the text inside it", () => {
  // Set up conditions
  const name = "toggle";
  const leftAnswerLabel = "Left Answer";
  const rightAnswerLabel = "Right Answer";
  const isAnswerSelected = true;
  const isDisabled = false;
  const textColour = "blue";

  // Act
  render(
    <Toggle
      key={name}
      name={name}
      isRightAnswerSelected={isAnswerSelected}
      toggleAnswer={() => {}}
      correctAnswerLabel={leftAnswerLabel}
      incorrectAnswerLabel={rightAnswerLabel}
      isDisabled={isDisabled}
      textColor={textColour}
    />
  );

  // Assert
  const expectLeftLabelToBe = screen.getByText(/Left Answer/i);
  expect(expectLeftLabelToBe).toBeInTheDocument();

  const expectRightLabelToBe = screen.getByText(/Right Answer/i);
  expect(expectRightLabelToBe).toBeInTheDocument();
});
