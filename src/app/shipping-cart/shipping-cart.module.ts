import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ShippingCartComponent } from './shipping-cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'shipping-cart', component: ShippingCartComponent },
      { path: 'shipping-cart/products', component: ProductListComponent },
      { path: 'shipping-cart/products/:productId', component: ProductDetailsComponent },
      { path: 'shipping-cart/cart', component: CartComponent },
      { path: 'shipping-cart/shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ShippingCartComponent,
  ],
  bootstrap: [
    ShippingCartComponent
  ]
})
export class ShippingCartModule { }
