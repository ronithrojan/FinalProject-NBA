import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
  // questionsAndAnswers: QAndA = { questions: [], answers: {} };

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
  // calculateScore() {
  //   this.lastPlayer.username = form.value.username;
  //   this.lastPlayer.score = 0;
  //   this.questionsAndAnswers.questions = questions;
  //   this.questionsAndAnswers.answers = form.value;
  //   this.questionsAndAnswers.forEach((question, index) => {
  //     if (question.answer === format.value[index]) {
  //       this.lastPlayer.score++;
  //     }
  //   });
  //   this.addScore(this.lastPlayer).subscribe();
  // }
}
