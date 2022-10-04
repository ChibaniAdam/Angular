import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
const ROUTES: Routes = [
  {path:"", redirectTo: 'home', pathMatch:'full'},
  {path:"home", component: HomeComponent},
  {path:"contact", component: ContactComponent},
  {path:"user", component: UserListComponent},
  {path:"product", component: ListProductComponent},
  {path:"**",component:NotFoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
