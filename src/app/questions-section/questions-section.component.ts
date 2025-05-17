import { Component, OnInit } from '@angular/core';
import { sections } from '../../assets/sections';
import { Question } from '../models/question';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-questions-section',
  templateUrl: './questions-section.component.html',
  styleUrl: './questions-section.component.scss',
})
export class QuestionsSectionComponent {
  sections = [...sections];
  result: any;

  constructor(private readonly questionsService: QuestionsService) {}

  onAnswerSelect(event: any, question: Question) {
    question.value = +event.value + 1;
  }

  onSubmit() {
    const questions = this.sections.flatMap((section) => {
      return section.questions.map((question) => {
        return {
          [question.questionTitle]: question.value,
        };
      });
    });

    this.questionsService.getResult(questions).subscribe((res) => {
      this.result = Object.entries(res);
    });
  }
}
