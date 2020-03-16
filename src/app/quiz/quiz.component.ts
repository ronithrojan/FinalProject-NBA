import { Component, OnInit } from '@angular/core';
import { TriviaquizService } from '../triviaquiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any;
  constructor(private service: TriviaquizService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(){
    this.service.getQuestions().subscribe(response => {
      console.log(response)
      this.questions = response
    }) 
  }

}
