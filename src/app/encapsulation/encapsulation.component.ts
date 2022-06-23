import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  template: `
    <h2>Encapsulation Tutorials</h2>
    <router-outlet></router-outlet>
  `,
  styles: [
    `app-no-encapsulation, app-emulated-encapsulation, app-shadow-dom-encapsulation {
      display: block; max-width: 500px; padding: 5px; margin: 5px 0;
    }`,
    'app-no-encapsulation { border: solid 2px red; }',
    'app-emulated-encapsulation { border: solid 2px green; }',
    'app-shadow-dom-encapsulation { border: solid 2px blue; }'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class EncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
