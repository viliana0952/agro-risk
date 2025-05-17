import { QuestionSection } from '../app/models/question-section';
import { QuestionType } from '../app/models/question-type.enum';

export const sections: QuestionSection[] = [
  {
    type: QuestionType.GRADUSHKA,
    questions: [
      {
        questionTitle: 'gradushka_gradobitnost',
        questionText:
          'Според предоставената карта вие в селище с каква градобитност се намирате?',
        answers: ['Силна', 'Средна', 'Слаба'],
      },
      {
        questionTitle: 'gradushka_diapazoni',
        questionText: 'Вие попадате ли в някой от тези диапазони?',
        answers: ['Да', 'Не'],
      },
    ],
  },
  {
    type: QuestionType.SILNI_VETROVE,
    questions: [
      {
        questionTitle: 'silni_vetrove_voda',
        questionText:
          'На какво разстояние се намирате от най-близкия голям воден басейн или море?',
        answers: ['0-5км ', '5-20км ', '20-50км', 'Над 50км'],
      },
    ],
  },
];
