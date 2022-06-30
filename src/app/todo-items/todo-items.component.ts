import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../shared/todo-item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  
  @Input() items: TodoItem[] = [];
  @Output() removeItem = new EventEmitter()
  @Output() setDone = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  removeTodo(index: any){
    this.removeItem.emit(index)
  }
  setItem(id: any, value: string, status: boolean){
    this.setDone.emit({
      id: id,
      value: value,
      done: !status
    })
  }
}
