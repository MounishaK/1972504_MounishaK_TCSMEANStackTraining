import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { TestQuestions } from './testquestions.model';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestquestionsService {

  constructor(public http:HttpClient) { }
/*
  loadTestQuestions():Observable<TestQuestions[]>
  {
    return this.http.get<TestQuestions[]>("/assets/testquestions.json");
  }

*/

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: '/assets/testquestions.json', name: 'Math Quiz' },
    ];
  }

}