import { Component, OnInit } from "@angular/core";
import { TriviaquizService } from "../triviaquiz.service";
import { Score } from "../interfaces/score";
import { LastPlayer } from "../interfaces/last-player";
import { QuestionAnswers } from "../interfaces/question-answers";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class ScoreComponent implements OnInit {
  scores: any;
  showHigh: boolean = false;
  showAverage: boolean = false;
  showLow: boolean = false;
  lastPlayer: LastPlayer;
  questionsAndAnswers: QuestionAnswers;
  show: boolean = false;

  constructor(private service: TriviaquizService) {}

  ngOnInit(): void {
    this.service.getScores().subscribe(response => {
      this.scores = response;
      console.log(response);
    });
    this.lastPlayer = this.service.getLastPlayer();
    this.questionsAndAnswers = this.service.getQuestionsAndAnswers();
    console.log(this.questionsAndAnswers);
    this.showGif();
  }

  showGif(): void {
    if (this.lastPlayer.score <= 2) {
      this.showLow = true;
    } else if (this.lastPlayer.score <= 5) {
      this.showAverage = true;
    } else {
      this.showHigh = true;
    }
  }

  showAnswers(): any {
    this.show = !this.show;
    console.log("whadup");
  }
}
