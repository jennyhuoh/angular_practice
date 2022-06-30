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
  constructor() { }

  ngOnInit(): void {
  }
  removeTodo(index: any){
    this.removeItem.emit(index)
  }
}
