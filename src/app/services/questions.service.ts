import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionType } from '../models/question-type.enum';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  constructor(private readonly http: HttpClient) {}

  getResult(questions: any[]) {
    // return this.http.post('http://localhost:8080/risks/result', questions);

    return of({
        [QuestionType.GRADUSHKA]: 25.5,
        [QuestionType.SILNI_VETROVE]: 32.3,
      });
  }
}
