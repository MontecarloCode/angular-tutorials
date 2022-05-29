import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  template: `
    <h1 id="top">Lifecycle Hooks</h1>
    <router-outlet></router-outlet>
  `,
})
export class LifecycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
