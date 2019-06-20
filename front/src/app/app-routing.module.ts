import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PageDetailsComponent} from './underComponents/underUnderComponents/page-details/page-details.component';
import {DetailsUserComponent} from './underComponents/details-user/details-user.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './services/Auth.service';
import {UsersComponent} from './users/users.component';
const routes: Routes = [
  {path: 'users/:id', component: DetailsUserComponent, canActivate: [AuthGuard]},
  {path: 'pages/:id', component: PageDetailsComponent, canActivate: [AuthGuard]},
  {path: '', component: AccueilComponent},
  {path: 'pages', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];
@NgModule({
  providers: [AuthService, AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
