import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-of-tour',
  templateUrl: './heroes-of-tour.component.html',
  styleUrls: ['./heroes-of-tour.component.css']
})
export class HeroesOfTourComponent implements OnInit {

  constructor() { }
  title = 'angular heroes';
  
  ngOnInit(): void {
  }

}
