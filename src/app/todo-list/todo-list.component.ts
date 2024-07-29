import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { EventService, Events } from '../event.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  @Input('todoList')todoList:any[]=[];
  @Output('deleteToDo')deleteToDo=new EventEmitter<number>();

  constructor(private eventBusService:EventService){}

  ngOnChanges(changes:SimpleChange){
   console.log(changes);
  }

  delete(todoIndex:number,todoId:number){
    this.deleteToDo.emit(todoId);
    this.eventBusService.emit({name:Events.ToDoDeleted,value:`ToDo ${todoId} deleted`});
  }


}
