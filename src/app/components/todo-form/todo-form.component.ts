import { Component, OnInit } from '@angular/core';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { Todo } from "../../model/todo";
import { TodoService } from "../../service/todo.service";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle:string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(){
    const newTodo: Todo = {
      id : uuidv4(),
      isComplete: false,
      date: new Date(),
      title: this.todoTitle 
    }

    this.todoService.addTodo(newTodo);
    this.todoTitle = " ";
  }

}
