import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncapsulationRoutingModule } from './encapsulation-routing.module';
import { EncapsulationComponent } from './encapsulation.component';
import { NoEncapsulationComponent } from './no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation.component';

@NgModule({
  declarations: [
    EncapsulationComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent
  ],
  imports: [
    CommonModule,
    EncapsulationRoutingModule
  ],
  bootstrap: [EncapsulationComponent]
})
export class EncapsulationModule { }
