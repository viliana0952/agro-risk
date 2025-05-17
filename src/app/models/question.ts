import { QuestionType } from "./question-type.enum"

export interface Question {
    questionTitle: string,
    questionText: string,
    answers: string[],
    value?: number,
    type?: QuestionType
}