import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/questions1.json', name: 'Questions1' },
      { id: 'data/questions2.json', name: 'Questions2' },
      { id: 'data/questions3.json', name: 'Questions3' },
      { id: 'data/questions4.json', name: 'Questions4' },
      { id: 'data/questions5.json', name: 'Questions5' }
    ];
  }

}
