import { Question } from "./question";
import { QuestionType } from "./question-type.enum";

export interface QuestionSection {
    type: QuestionType,
    questions: Question[]
}