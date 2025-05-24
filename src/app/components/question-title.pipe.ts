import { Pipe, PipeTransform } from '@angular/core';
import { QuestionType } from '../models/question-type.enum';

@Pipe({
  name: 'questionTitle',
})
export class QuestionTitlePipe implements PipeTransform {
  transform(value: QuestionType): string {
    switch (value) {
      case QuestionType.GRADUSHKA:
        return 'Градушка';
      case QuestionType.SILNI_VETROVE:
        return 'Силни ветрове';
      case QuestionType.PROLIVEN_DAJD_NAVODNENIE:
        return 'Проливен дъжд и наводнение';
      case QuestionType.OGAN:
        return 'Пожар';
      case QuestionType.OSLANQVANE:
        return 'Осланяване';
      case QuestionType.KISHA:
        return 'Киша';
      case QuestionType.IZMRAZVANE:
        return 'Измръзване';
      case QuestionType.IZTEGLQNE:
        return 'Изтегляне';
    }
  }
}
