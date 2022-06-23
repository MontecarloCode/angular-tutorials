import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EncapsulationComponent } from './encapsulation.component';
import { NoEncapsulationComponent } from './no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation.component';

const routes: Routes = [
  { path: 'encapsulation', component: EncapsulationComponent, children: [
      { path: 'no-encapsulation', component: NoEncapsulationComponent},
      { path: 'emulated-encapsulation', component: EmulatedEncapsulationComponent},
      { path: 'shadow-dom-encapsulation', component: ShadowDomEncapsulationComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class EncapsulationRoutingModule { }
