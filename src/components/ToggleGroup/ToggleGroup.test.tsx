import React from "react";
import { render, screen } from "@testing-library/react";
import { howManyAnswersIncorrect } from "./ToggleGroup";

import { SelectableAnswers } from "./ToggleGroup.types";

test("Correctly Calculates the number of right answers", () => {
  // Set up conditions
  const initialSelectedResponses: boolean[] = [false, true, true, false, false];

  const selectableAnswers: SelectableAnswers[] = [
    ["Good pay", "Bad pay", true],
    ["Lot of meetings", "Less meetings", false],
    ["Expensive coffee", "Free coffee", false],
    ["Bear in office", "Dog in office", false],
    ["At home", "In the office", true],
  ];

  // Act
  const incorrectAnswers = howManyAnswersIncorrect(
    initialSelectedResponses,
    selectableAnswers
  );

  // Assert
  expect(incorrectAnswers).toEqual(4);
});
