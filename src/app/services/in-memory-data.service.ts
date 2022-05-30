import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from '../heroes-of-tour/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Tornado', power: 'Really Smart', alterEgo: 'Chuck Overstreet' },
      { id: 1, name: 'Tornado', power: 'Super Flexible', alterEgo: 'Chuck Overstreet' },
      { id: 2, name: 'Dr. Nice', power: 'Really Smart', alterEgo: 'Chuck Overstreet' },
      { id: 3, name: 'Bombasto', power: 'Super Hot', alterEgo: 'Chuck Overstreet' },
      { id: 4, name: 'Celeritas', power: 'Super Flexible', alterEgo: 'Chuck Overstreet' },
      { id: 5, name: 'Magneta', power: 'Super Hot', alterEgo: 'Chuck Overstreet' },
      { id: 6, name: 'RubberMan', power: 'Really Smart', alterEgo: 'Chuck Overstreet' },
      { id: 7, name: 'Dynama', power: 'Weather Changer', alterEgo: 'Chuck Overstreet' },
      { id: 8, name: 'Dr. IQ', power: 'Weather Changer', alterEgo: 'Chuck Overstreet' },
      { id: 9, name: 'Magma', power: 'Super Hot', alterEgo: 'Chuck Overstreet' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0;
  }
}