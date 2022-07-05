import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddFormComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
