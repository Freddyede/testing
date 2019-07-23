import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {PageDetailsComponent} from './undercomponents/underUnderComponents/page-details/page-details.component';
import {AccueilComponent} from './components/accueil/accueil.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/Auth.service';
import {MessagesComponent} from './components/messages/messages.component';
const routes: Routes = [
  { path: 'pages/:id', component: PageDetailsComponent, canActivate: [AuthGuard] },
  { path: '', component: AccueilComponent },
  { path: 'pages', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] }
];
@NgModule({
  providers: [AuthService, AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
