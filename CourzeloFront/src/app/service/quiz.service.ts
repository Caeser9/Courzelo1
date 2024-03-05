import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/Question.model';
import { Answer } from 'src/app/model/Answers.model';
import { QuestionWrapper } from 'src/app/model/QuestionWrapper.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseURL = "http://localhost:8080/quiz";

  constructor(private httpClient: HttpClient) { }

  createQuiz(quiz: any, num: number, category: string): Observable<string> {
    return this.httpClient.post<string>(`${this.baseURL}/create/${num}/${category}`, quiz, { responseType: 'text' as 'json' });
  }

  getQuizQuestions(id: string): Observable<QuestionWrapper[]> {
    return this.httpClient.get<QuestionWrapper[]>(`${this.baseURL}/get/${id}`);
  }

  getQuizResult(idQuiz: string, answers: Answer[]): Observable<number> {
    return this.httpClient.post<number>(`${this.baseURL}/getResult/${idQuiz}`, answers);
  }
  getQuizList(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL}/getAll`);
  }
}
