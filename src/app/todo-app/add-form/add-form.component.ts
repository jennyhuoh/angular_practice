import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  
  placeholderText='請輸入待辦事項'
 
  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }
  @Input() todoText: string=''
  // @Output() addTodoItem = new EventEmitter()
  
  addTodo(){
    console.log(`輸入的文字為：${this.todoText}`)
    this.todoListService.addTodo(this.todoText)
    this.todoText=''
  }
  
}
