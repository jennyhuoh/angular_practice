import { TodoItem } from './shared/todo-item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoItems: TodoItem[]
  // todoItems: TodoItem[]=[{
  //   id: 1,
  //   value: 'Todo Item No.1',
  //   done: false
  // },{
  //   id: 2,
  //   value: 'Todo Item No.2',
  //   done: true
  // },{
  //   id: 3,
  //   value: 'Todo Item No.3',
  //   done: false
  // }]
  constructor(private http: HttpClient) { }
  loadTodoList(){
    console.log('load')
    this.http.get<TodoItem[]>('../assets/todo-list.json').subscribe(data=>{this.todoItems = data})
  }

  getTodoList(){
    return this.todoItems
  }
  addTodo(text: any) {
    console.log('here')
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    })
    console.log(this.todoItems)
  }
  removeTodo(index: any) {
    let newArr = this.todoItems.filter(item => {
      return item.id !== index
    })
    this.todoItems = newArr
  }
  setItem(obj: any){
    console.log(obj)
    let item = this.todoItems.findIndex(item => item.id === obj.id)
    this.todoItems[item] = obj
  }
}
