import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Question } from "./interfaces/question";
import { NgForm } from "@angular/forms";
import { QuestionAnswers } from "./interfaces/question-answers";
// import { format } from "path";

@Injectable({
  providedIn: "root"
})
export class TriviaquizService {
  baseUrl: string = "http://localhost:3000";
  lastPlayer: any = {
    username: "",
    score: 0
  };
  questionsAndAnswers: QuestionAnswers = { questions: [], answers: {} };

  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get(`${this.baseUrl}/questions`);
  }
  getScores() {
    return this.http.get(`${this.baseUrl}/scores`);
  }
  getLastPlayer() {
    return this.lastPlayer;
  }
  calculateScore(form: NgForm, questions: Question[]) {
    this.lastPlayer.username = form.value.username;
    this.lastPlayer.city = form.value.city;
    this.lastPlayer.state = form.value.state;
    this.lastPlayer.score = 0;
    this.questionsAndAnswers.questions = questions;
    this.questionsAndAnswers.answers = form.value;
    questions.forEach((question, index) => {
      if (question.answer === form.value[index]) {
        this.lastPlayer.score++;
      }
    });
    this.addScore(this.lastPlayer).subscribe();
  }
  addScore(theLastPlayer: any) {
    return this.http.post(`${this.baseUrl}/scores`, theLastPlayer);
  }
  getQuestionsAndAnswers() {
    return this.questionsAndAnswers;
  }
}
