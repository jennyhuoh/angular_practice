import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../shared/todo-item';
@Pipe({
  name: 'todoDone'
})
export class TodoDonePipe implements PipeTransform {

  transform(todoItem: TodoItem, displayNotDone: boolean): any {
    if(todoItem.done){
      return '(已完成)'
    } else if(displayNotDone){
      return '(未完成)'
    }
    return '';
  }

}
