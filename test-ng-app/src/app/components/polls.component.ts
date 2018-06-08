import { Component,Input } from '@angular/core';

import { TodoService } from '../services/polls.service';
import { Todo } from '../models/polls.model';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/polls.component.html',
  styleUrls: ['../static/polls.component.css']
})
export class TodoListComponent {
  todos;

  constructor(
    private todoService: TodoService,
  ){}

  ngOnInit() {
    this.todos = this.todoService.getAllTodo();
  }
}