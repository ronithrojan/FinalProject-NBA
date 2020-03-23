import { Component, OnInit } from "@angular/core";
import { TriviaquizService } from "../triviaquiz.service";
import { Score } from "../interfaces/score";
import { LastPlayer } from "../interfaces/last-player";

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
  constructor(private service: TriviaquizService) {}

  ngOnInit(): void {
    this.service.getScores().subscribe(response => {
      this.scores = response;
      console.log(response);
    });
    this.lastPlayer = this.service.getLastPlayer();
  }

  showGif(): any {
    if (this.scores <= 4) {
      return this.showLow;
    } else if (this.scores > 4 && this.scores <= 7) {
      return this.showAverage;
    } else return this.showHigh;
  }
}
