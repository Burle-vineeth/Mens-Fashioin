import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authorization/register/register.component';
import { LoginComponent } from './authorization/login/login.component';
import { PageNotFoundComponent } from './authorization/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './authorization/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', loadChildren: () => import('./home-landing/home-landing.module').then( m => m.HomeLandingModule)},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
