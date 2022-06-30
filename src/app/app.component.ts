import { Component } from '@angular/core';
import { TodoItem } from './shared/todo-item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
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
    let newArr = this.todoItems.filter(function(item){
      return item.id !== index
    })
    this.todoItems = newArr
  }
}