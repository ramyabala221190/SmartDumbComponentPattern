import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  fetchPostsList(userId:number){
    return this.http.get(`api/posts?userId=^${userId}$`);
  }

  fetchCommentsList(postId:number){
    return this.http.get(`api/comments?postId=^${postId}$`);
  }
 
}
