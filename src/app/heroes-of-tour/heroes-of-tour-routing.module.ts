import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesOfTourComponent } from './heroes-of-tour.component';
import { HeroesComponent } from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroFormComponent} from './hero-form/hero-form.component';

const routes: Routes = [
  { path: 'heroes-of-tour', component: HeroesOfTourComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroFormComponent },
    { path: 'heroes', component: HeroesComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HeroesOfTourRoutingModule { }