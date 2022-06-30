import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  
  placeholderText='請輸入待辦事項'
 
  constructor() { }

  ngOnInit(): void {
  }
  @Input() todoText: string=''
  @Output() addTodoItem = new EventEmitter()
  addTodo(){
    console.log(`輸入的文字為：${this.todoText}`)
    this.addTodoItem.emit(this.todoText)
  this.todoText=''
  }
}
