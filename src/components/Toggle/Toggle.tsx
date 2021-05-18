import "./Toggle.css";
import { ToggleProps } from "./Toggle.types";

function Toggle({
  name,
  isRightAnswerSelected,
  toggleAnswer,
  correctAnswerLabel,
  incorrectAnswerLabel,
  isDisabled,
  textColor,
}: ToggleProps) {
  return (
    <div className="toggle">
      <input
        disabled={isDisabled}
        type="checkbox"
        className="toggle-checkbox"
        name={name}
        id={name}
        checked={!isRightAnswerSelected}
        onChange={toggleAnswer}
      />
      <label
        className={`toggle-label ${isDisabled ? "" : "pointer-cursor"}`}
        htmlFor={name}
      >
        <span className="toggle-answers">
          <span
            className="left-answer"
            style={{ color: isRightAnswerSelected ? textColor : "white" }}
          >
            {correctAnswerLabel}
          </span>
          <span
            className="right-answer"
            style={{ color: isRightAnswerSelected ? "white" : textColor }}
          >
            {incorrectAnswerLabel}
          </span>
        </span>
        <span className="toggle-switch"></span>
      </label>
    </div>
  );
}

export default Toggle;
