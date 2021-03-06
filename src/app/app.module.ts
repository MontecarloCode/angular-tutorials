import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShippingCartModule } from './shipping-cart/shipping-cart.module';
import { LifecycleHooksModule } from './lifecycle-hooks/lifecycle-hooks.module';
import { HeroesOfTourModule } from './heroes-of-tour/heroes-of-tour.module';

import { AppComponent } from './app.component';
import { ExampleDropdownComponent } from './example-dropdown/example-dropdown.component';


@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    ShippingCartModule,
    LifecycleHooksModule,
    HeroesOfTourModule,
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
