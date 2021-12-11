import { Injectable } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import {Todo} from './../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: "learn javascript",
        date: new Date(),
        isComplete: false
      } ,
      {
        id: '222',
        title: "learn webscript",
        date: new Date(),
        isComplete: true
      },
    ]
   }

   getTodos(){
     return of(this.todos);
   }

   addTodo(todo: Todo){
     this.todos.push(todo);
   }

   changeStatus(todo: Todo){
     this.todos.map( singleTodo => {
       if(singleTodo.id === todo.id){
         todo.isComplete = !todo.isComplete;
       }
     })

   }


   deleteTodo(todo: Todo){     

    const indexOfTodo = this.todos.findIndex(
      (currentObj) => {
        currentObj.id === todo.id;
      }
    )
    this.todos.splice(indexOfTodo,1);

   }
}
