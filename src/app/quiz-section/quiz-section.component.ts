import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

interface QuizQuestion {
  id: number,
  question: string,
  description: string,
  answers: {
    answer_a: string | null,
    answer_b: string | null,
    answer_c: string | null,
    answer_d: string | null,
    answer_e: string | null,
    answer_f: string | null
  },
  multiple_correct_answers: boolean,
  correct_answers: {
    answer_a_correct: boolean,
    answer_b_correct: boolean,
    answer_c_correct: boolean,
    answer_d_correct: boolean,
    answer_e_correct: boolean,
    answer_f_correct: boolean
  },
  explanation: string,
  tip: string | null,
  tags: [],
  category: string,
  difficulty: string
}

@Component({
  selector: 'app-quiz-section',
  templateUrl: './quiz-section.component.html',
  styleUrl: './quiz-section.component.scss'
})
export class QuizSectionComponent implements OnInit {
  quizList: Array<QuizQuestion> = []
  api_base_url: string = 'https://quizapi.io/api/v1'
  questions: string = '/questions'
  // quiz: '/quiz'
  ngOnInit(): void {
    axios({
      method: 'get',
      url: `${this.api_base_url + this.questions}`,
      headers: { 'x-api-key': environment.QUIZ_API_KEY }
    })
      .then(response => {
        if (response.status == 200) {
          // console.log(response.data)
          this.quizList = response.data
        }
      })
      .catch(error => {
        console.error(error.getMessage())
      })
  }
}
