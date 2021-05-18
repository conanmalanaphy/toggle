import { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./ToggleGroup.css";
import { ToggleGroupProps, SelectableAnswers } from "./ToggleGroup.types";
import colourScales from "./colourScales";

export function howManyAnswersIncorrect(
  selectedResponses: boolean[],
  selectableAnswers: SelectableAnswers[]
) {
  return selectedResponses.filter((answer: boolean, index: number) => {
    return answer !== selectableAnswers[index][2];
  }).length;
}

function ToggleGroup({
  question,
  selectableAnswers,
  initialSelectedResponses,
}: ToggleGroupProps) {
  const [selectedResponses, setSelectedResponses] = useState(
    initialSelectedResponses
  );

  // We should pick a colour scale based on the number of questions
  const colourScale = colourScales[selectableAnswers.length - 2];

  const howManyAreIncorrect = howManyAnswersIncorrect(
    selectedResponses,
    selectableAnswers
  );

  const isAnswerComplete = howManyAreIncorrect === 0;

  return (
    <div
      className="toggle-group"
      style={{
        background: `linear-gradient(${colourScale[howManyAreIncorrect][0]}, ${colourScale[howManyAreIncorrect][1]}`,
      }}
    >
      <span className="text question">{question}</span>
      {selectableAnswers.map((answers: SelectableAnswers, index: any) => {
        const [leftAnswerLabel, rightAnswerLabel] = answers;

        const toggleName = `${leftAnswerLabel}-${rightAnswerLabel}`;

        return (
          <Toggle
            key={toggleName}
            name={toggleName}
            isRightAnswerSelected={selectedResponses[index]}
            toggleAnswer={() => {
              // Take a copy of the responsesState
              const selectedResponse = [...selectedResponses];

              // Only update the changed value
              selectedResponse[index] = !selectedResponse[index];

              setSelectedResponses(selectedResponse);
            }}
            correctAnswerLabel={leftAnswerLabel}
            incorrectAnswerLabel={rightAnswerLabel}
            isDisabled={isAnswerComplete}
            textColor={colourScale[howManyAreIncorrect][1]}
          />
        );
      })}
      <span className="text answer">
        The answer is {isAnswerComplete ? "correct" : "incorrect"}
      </span>
    </div>
  );
}

export default ToggleGroup;
