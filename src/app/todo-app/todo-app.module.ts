import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoDonePipe } from './todo-done.pipe';
import { BsButtonDirective } from '../bs-button.directive';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoListService } from './todo-list.service'
@NgModule({
  declarations: [
    TodoDonePipe,
    BsButtonDirective,
    TodoAppComponent,
    AddFormComponent,
    TodoItemsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers:[TodoListService],
  exports:[
    TodoAppComponent
  ]
})
export class TodoAppModule { }
