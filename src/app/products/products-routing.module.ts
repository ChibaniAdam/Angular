import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent,children:[ {path:"", component: ListProductComponent},
{path:"list", redirectTo: '', pathMatch:'full'},
{path:'new',component:NewProductComponent},
{path:'category/:category', component:ListProductComponent},
{path:'outofstock',component:AdminProductComponent}] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
