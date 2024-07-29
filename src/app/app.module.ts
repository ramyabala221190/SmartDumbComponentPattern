import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClientSideDBService } from './client-side-db.service';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailComponent,
    TodoListComponent,
    BasicDetailComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ClientSideDBService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
