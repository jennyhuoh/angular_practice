import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../shared/todo-item';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  
  // @Input() items: TodoItem[] = [];
  // @Output() removeItem = new EventEmitter()
  // @Output() setDone = new EventEmitter()
    constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoListService.loadTodoList();
  }
  getTodoList(){
    return this.todoListService.getTodoList()
  }
  removeTodo(index: any){
    this.todoListService.removeTodo(index)
    // this.removeItem.emit(index)
  }
  setItem(id: any, value: string, status: boolean){
    // this.setDone.emit({
    //   id: id,
    //   value: value,
    //   done: !status
    // })
    this.todoListService.setItem({
      id: id,
      value: value,
      done: !status
    })
  }
}
