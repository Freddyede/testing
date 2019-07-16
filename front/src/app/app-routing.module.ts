import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { RegistrationComponent } from './COMPONENTS/registration/registration.component';
import { HomePageComponent } from './COMPONENTS/home-page/home-page.component';
import { PageDetailsComponent } from './UNDERCOMPONENTS/underUnderComponents/page-details/page-details.component';
import {AccueilComponent} from './COMPONENTS/accueil/accueil.component';
import { AuthGuard } from './GUARDS/auth.guard';
import { AuthService } from './SERVICES/Auth.service';

const routes: Routes = [
  {path: 'pages/:id', component: PageDetailsComponent, canActivate: [AuthGuard]},
  {path: '', component: AccueilComponent},
  {path: 'pages', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];
@NgModule({
  providers: [AuthService, AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
