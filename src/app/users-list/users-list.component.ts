import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { EventService, Events } from '../event.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  constructor(private usersService:UsersService){}

  usersList:Observable<any>|undefined;

  ngOnInit(){
    this.usersList=this.usersService.fetchUsersList();
  }



}
