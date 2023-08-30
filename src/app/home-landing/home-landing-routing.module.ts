import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeSectorComponent } from './home-sector/home-sector.component';

const routes: Routes = [
  { path: '', component: HomeLandingComponent, children: [
    { path: '', component: HomeComponent},
    { path: '**', component: HomeSectorComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLandingRoutingModule { }
