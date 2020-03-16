import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaquizService {
  baseUrl: string = "http://localhost:3000"

  constructor(private http: HttpClient) { 
  }

  getQuestions(){
    return this.http.get(`${this.baseUrl}/questions`)
  }

}
