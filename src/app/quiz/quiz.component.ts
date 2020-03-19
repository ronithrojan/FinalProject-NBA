import { Component, OnInit } from "@angular/core";
import { TriviaquizService } from "../triviaquiz.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LastPlayer } from "../interfaces/last-player";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  userInput: boolean = false;
  playButton: boolean = true;
  show: boolean = false;
  questions: any;
  seconds: number;

  constructor(private service: TriviaquizService, private router: Router) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.service.getQuestions().subscribe(response => {
      console.log(response);
      this.questions = response;
    });
  }
  submitQuiz(form: NgForm) {
    this.service.calculateScore(form, this.questions);
    this.router.navigate(["/scores"]);
  }
  showForm() {
    this.show = !this.show;
    this.userInput = !this.userInput;
    this.playButton = false;
  }
  hideUserInput() {
    this.userInput = false;
    this.startCountdown();
  }

  startCountdown(counter: number = 60): void {
    let interval = setInterval(() => {
      this.seconds = counter;
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        console.log(`Ding!`);
      }
    }, 1000);
  }
}
