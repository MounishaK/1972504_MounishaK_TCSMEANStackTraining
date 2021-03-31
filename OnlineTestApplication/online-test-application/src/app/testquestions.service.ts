import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestquestionsService {

  constructor(public http:HttpClient) { }


  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: '/assets/testquestions.json', name: 'Math Quiz' },
    ];
  }

}