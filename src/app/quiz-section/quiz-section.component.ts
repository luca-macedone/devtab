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
    answer_a_correct: string,
    answer_b_correct: string,
    answer_c_correct: string,
    answer_d_correct: string,
    answer_e_correct: string,
    answer_f_correct: string
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
  quizStarted: boolean = false
  lastQuestionIndex: number = 0
  score: number = 0
  loading: boolean = false
  endgame: boolean = false
  // quiz: '/quiz'
  ngOnInit(): void {
    this.quizStarted = false
    this.lastQuestionIndex = 0
    this.score = 0
    this.loading = false
    this.endgame = false
  }

  fetchQuizQuestions() {
    this.loading = true
    axios({
      method: 'get',
      url: `${this.api_base_url + this.questions}`,
      headers: { 'x-api-key': environment.QUIZ_API_KEY }
    })
      .then(response => {
        if (response.status == 200) {
          // console.log(response.data)
          this.loading = false
          this.quizStarted = true
          this.quizList = response.data
        }
      })
      .catch(error => {
        console.error(error.getMessage())
      })
  }

  startGame() {
    this.fetchQuizQuestions()
    this.endgame = false
    this.lastQuestionIndex = 0
    this.score = 0
  }

  endGame() {
    this.endgame = true
    this.quizStarted = false
  }

  checkAnswer(answer: string) {
    switch (answer) {
      case 'a':
        if (this.quizList[this.lastQuestionIndex].correct_answers.answer_a_correct == 'true') {
          this.score++
          this.quizList.length > this.lastQuestionIndex + 1 ? this.lastQuestionIndex++ : this.endGame()
        } else {
          this.endGame()
        }
        break;
      case 'b':
        if (this.quizList[this.lastQuestionIndex].correct_answers.answer_b_correct == 'true') {
          this.score++
          this.quizList.length > this.lastQuestionIndex + 1 ? this.lastQuestionIndex++ : this.endGame()
        } else {
          this.endGame()
        }
        break;
      case 'c':
        if (this.quizList[this.lastQuestionIndex].correct_answers.answer_c_correct == 'true') {
          this.score++
          this.quizList.length > this.lastQuestionIndex + 1 ? this.lastQuestionIndex++ : this.endGame()
        } else {
          this.endGame()
        }
        break;
      case 'd':
        if (this.quizList[this.lastQuestionIndex].correct_answers.answer_d_correct == 'true') {
          this.score++
          this.quizList.length > this.lastQuestionIndex + 1 ? this.lastQuestionIndex++ : this.endGame()
        } else {
          this.endGame()
        }
        break;
      case 'e':
        if (this.quizList[this.lastQuestionIndex].correct_answers.answer_e_correct == 'true') {
          this.score++
          this.quizList.length > this.lastQuestionIndex + 1 ? this.lastQuestionIndex++ : this.endGame()
        } else {
          this.endGame()
        }
        break;
      case 'f':
        if (this.quizList[this.lastQuestionIndex].correct_answers.answer_f_correct == 'true') {
          this.score++
          this.quizList.length > this.lastQuestionIndex + 1 ? this.lastQuestionIndex++ : this.endGame()
        } else {
          this.endGame()
        }
        break;
    }
  }
}
