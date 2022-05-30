import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesOfTourComponent } from './heroes-of-tour.component';

describe('HeroesOfTourComponent', () => {
  let component: HeroesOfTourComponent;
  let fixture: ComponentFixture<HeroesOfTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesOfTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesOfTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
