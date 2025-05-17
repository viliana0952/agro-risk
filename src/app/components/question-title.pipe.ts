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
        return '';
      case QuestionType.OGAN:
        return '';
      case QuestionType.OSLANQVANE:
        return '';
      case QuestionType.KISHA:
        return '';
      case QuestionType.IZMRAZVANE:
        return '';
      case QuestionType.IZTEGLQNE:
        return '';
    }
  }
}
