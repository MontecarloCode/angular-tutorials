import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo-parent/peek-a-boo/peek-a-boo.component';
import { PeekABooDirective } from '../directives/peek-a-boo.directive';
import { SpyDirective } from '../directives/spy.directive';
import { SpyComponent } from './spy/spy.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './on-changes-parent/on-changes.component';

@NgModule({
  declarations: [
    LifecycleHooksComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyComponent,
    PeekABooDirective,
    SpyDirective,
    OnChangesParentComponent,
    OnChangesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'lifecycle', component: LifecycleHooksComponent, children: [
        { path: '', redirectTo: 'hooks', pathMatch: 'full' },
        { path: 'hooks', component: PeekABooParentComponent }, 
        { path: 'spy', component: SpyComponent }, 
        { path: 'onchanges', component: OnChangesParentComponent }, 
      ]},
    ]),
  ]
})
export class LifecycleHooksModule { }
