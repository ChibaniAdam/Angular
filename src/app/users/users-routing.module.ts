import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent,children:[ {path:"", component: UserListComponent},
{path:"list", redirectTo: '', pathMatch:'full'},
{path:"profile/:id",  component:UserProfileComponent},
{path:"job/:job",  component:UserListComponent}]},
{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
