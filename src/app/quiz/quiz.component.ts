import { Component, OnInit } from "@angular/core";
import { TriviaquizService } from "../triviaquiz.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any;
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
}
