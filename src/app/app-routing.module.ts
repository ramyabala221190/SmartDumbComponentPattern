import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path:"users-list",
    component:UsersListComponent,
    children:[
      {
        path:"detail/:id",
        component:UserDetailComponent
      }
    ]
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"users-list"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
