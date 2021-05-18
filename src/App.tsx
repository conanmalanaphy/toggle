import "./App.css";
import ToggleGroup from "./components/ToggleGroup/ToggleGroup";
import { SelectableAnswers } from "./components/ToggleGroup/ToggleGroup.types";

function App() {
  const question = "What are the ideal conditions inside an office?";

  // In the format
  // [Left Answer, Right Answer, Correct Answer (Left being True)]
  const selectableAnswers: SelectableAnswers[] = [
    ["Good pay", "Bad pay", true],
    ["Lot of meetings", "Less meetings", false],
    ["Expensive coffee", "Free coffee", false],
    ["Bear in office", "Dog in office", false],
  ];

  // Random initial state of Inputs
  const initialSelectedResponses: boolean[] = [false, true, true, false];

  return (
    <ToggleGroup
      question={question}
      selectableAnswers={selectableAnswers}
      initialSelectedResponses={initialSelectedResponses}
    />
  );
}

export default App;
