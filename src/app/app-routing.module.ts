import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {IndexComponent} from './index/index.component';

const  appRoutes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full'},
  { path: 'cart', component: CartComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
