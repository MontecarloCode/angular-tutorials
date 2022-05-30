import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  // hero: Hero | undefined;
  heroes: Hero[] = [];
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  // hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  hero = new Hero(0, '', '');
  max = 0;
  submitted = false;

  ngOnInit(): void {
    this.getHeroes();
    this.getHero();
  }

  newHero(id: number) {
    this.hero = new Hero(id, '', '');
  }
  
  add() {
    this.hero.id = this.heroes.length;
    this.submitted = true; 
    this.heroService.addHero(this.hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id == 'new') {
      this.hero = new Hero(this.max, '', '')
    }else{
      this.heroService.getHero(Number(id))
        .subscribe(hero => this.hero = hero);
    }

  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
        let ids = heroes.map((obj) => {
          return obj.id;
        })
        this.max = Math.max(...ids); 
      });
  }

  goBack(): void {
    this.location.back();
  }
}