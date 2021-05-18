export interface ToggleProps {
  name: string;
  isRightAnswerSelected: boolean;
  toggleAnswer: () => void;
  correctAnswerLabel: string;
  incorrectAnswerLabel: string;
  isDisabled: boolean;
  textColor: string;
}
