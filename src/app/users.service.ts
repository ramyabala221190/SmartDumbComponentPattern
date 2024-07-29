import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  cachedUserslist:any[]=[];

  fetchUsersList(){
    return this.http.get("api/users");
  }

  fetchUserDetail(userId:number){
    return this.http.get(`api/users?id=^${userId}$`); 
  }
}
