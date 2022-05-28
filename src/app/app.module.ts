import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ShippingCartComponent } from './shipping-cart/shipping-cart.component';
import { TopBarComponent } from './shipping-cart/top-bar/top-bar.component'
import { ProductListComponent } from './shipping-cart/product-list/product-list.component';
import { ProductAlertsComponent } from './shipping-cart/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './shipping-cart/product-details/product-details.component';
import { CartComponent } from './shipping-cart/cart/cart.component';
import { ShippingComponent } from './shipping-cart/shipping/shipping.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { PeekABooParentComponent } from './lifecycle-hooks/peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './lifecycle-hooks/peek-a-boo-parent/peek-a-boo/peek-a-boo.component';
import { PeekABooDirective } from './directives/peek-a-boo.directive';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'shipping-cart', component: ShippingCartComponent, children: [
        { path: '', redirectTo: 'products', pathMatch: 'full' },
        { path: 'products', component: ProductListComponent },
        { path: 'products/:productId', component: ProductDetailsComponent },
        { path: 'cart', component: CartComponent },
        { path: 'shipping', component: ShippingComponent },
      ]},
      { path: 'lifecycle', component: LifecycleHooksComponent, children: [
        { path: '', redirectTo: 'hooks', pathMatch: 'full' },
        { path: 'hooks', component: PeekABooParentComponent }, 
      ]},

    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    PeekABooComponent,
    PeekABooDirective,
    PeekABooParentComponent,
    LifecycleHooksComponent,
    ShippingCartComponent,
    DropdownComponent,    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
