import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShippingCartModule } from './shipping-cart/shipping-cart.module';
import { LifecycleHooksModule } from './lifecycle-hooks/lifecycle-hooks.module';

import { AppComponent } from './app.component';
import { ExampleDropdownComponent } from './example-dropdown/example-dropdown.component';


@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    ShippingCartModule,
    LifecycleHooksModule,
    RouterModule.forRoot([
    ]),
  ],
  declarations: [
    AppComponent,
    ExampleDropdownComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
