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
  lastPlayer: LastPlayer;
  constructor(private service: TriviaquizService) {}

  ngOnInit(): void {
    this.service.getScores().subscribe(response => {
      this.scores = response;
      console.log(response);
    });
    this.lastPlayer = this.service.getLastPlayer();
  }
}
