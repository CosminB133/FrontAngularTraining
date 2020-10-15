import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { ProductIndexComponent } from './index/product-index/product-index.component';
import { CartComponent } from './cart/cart.component';
import { ProductCartComponent } from './cart/product-cart/product-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import {JwtInterceptor} from './shared/jwt.interceptor';
import { ProductsItemComponent } from './products/products-item/products-item.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductsNewComponent } from './products/products-new/products-new.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductIndexComponent,
    CartComponent,
    ProductCartComponent,
    LoginComponent,
    ProductsComponent,
    ProductsItemComponent,
    ProductsEditComponent,
    ProductsNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
