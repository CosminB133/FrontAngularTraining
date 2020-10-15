import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {ProductsEditComponent} from './products/products-edit/products-edit.component';
import {ProductsNewComponent} from './products/products-new/products-new.component';

const  appRoutes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full'},
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: ProductsNewComponent },
  { path: 'products/:id', component: ProductsEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
