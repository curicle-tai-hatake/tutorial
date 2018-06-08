import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Todo } from '../models/polls.model';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private Url = `http://127.0.0.1:8000/api/user`
  todo: Todo[] = [];

  constructor(
    private httpc: HttpClient,
  ){}

  // 全てのtodoをGETする
  getAllTodo() {
    this.httpc.get(this.Url).subscribe(data => {
      console.log(data);
      return data;  
    });
  }
}
