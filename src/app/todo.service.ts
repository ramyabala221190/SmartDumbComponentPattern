import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  fetchToDosList(userId:number){
    return this.http.get(`api/todos?userId=^${userId}$`);
  }

  deleteToDo(todoId:number){
    return this.http.delete(`api/todos/${todoId}`);
  }
}
