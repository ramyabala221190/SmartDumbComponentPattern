import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, filter, map } from 'rxjs';

export enum Events{
  UserSelected,
  ToDoDeleted
}

export interface EventModel{
  name:Events,
  value?:any
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private subject=new Subject<any>();

  constructor() { }

  on(event:Events):Observable<any>{
     return this.subject.pipe(
      filter((e:EventModel)=>{
         return e.name=== event;
      }),
      map((event:EventModel)=>{
        return event.value;  
      })
     );
  }

  emit(event:EventModel){
    this.subject.next(event);
  }
}

