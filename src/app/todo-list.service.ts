import { TodoItem } from './shared/todo-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoItems: TodoItem[]=[{
    id: 1,
    value: 'Todo Item No.1',
    done: false
  },{
    id: 2,
    value: 'Todo Item No.2',
    done: true
  },{
    id: 3,
    value: 'Todo Item No.3',
    done: false
  }]
  constructor() { }
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
