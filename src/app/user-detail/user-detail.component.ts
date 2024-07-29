import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';
import { Observable, forkJoin, map, mergeMap, tap } from 'rxjs';
import { TodoService } from '../todo.service';
import { PostsService } from '../posts.service';
import { EventService, Events } from '../event.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  activeUserId:number=0;
  basicUserDetails$:Observable<any>|undefined;
  todos$:Observable<any>|undefined;
  posts$:Observable<any>|undefined;
  comments$:Observable<any>|undefined;
  message$:Observable<string>|undefined;

  constructor(private activeRoute:ActivatedRoute,private usersService:UsersService,private todoService:TodoService,
    private postsService:PostsService,private eventService:EventService){
    this.activeRoute.params.pipe(
      tap((params:Params)=>{
      this.activeUserId=params["id"];
      this.message$=this.eventService.on(Events.ToDoDeleted)
    })).subscribe()
  }


  ngOnInit(){
  }

  deleteToDo(todoId:number){
    this.todoService.deleteToDo(todoId).pipe(
      tap(()=>this.fetchToDosList())
    ).subscribe()
  }

  fetchToDosList(){
    this.todos$=this.todoService.fetchToDosList(this.activeUserId);
  }

  fetchBasicUserDetails(){
    this.basicUserDetails$=this.usersService.fetchUserDetail(this.activeUserId);
  }

  fetchPostsList(){
    this.posts$=this.postsService.fetchPostsList(this.activeUserId)
  }

  fetchCommentsForPost(postId:number){
    console.log(postId)
    this.comments$=this.postsService.fetchCommentsList(postId)
  }


}


