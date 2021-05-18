export type SelectableAnswers = [string, string, boolean];

export interface ToggleGroupProps {
  question: string;
  selectableAnswers: SelectableAnswers[];
  initialSelectedResponses: boolean[];
}
