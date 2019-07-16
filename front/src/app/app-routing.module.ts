import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './COMPONENTS/login/login.component';
import {RegistrationComponent} from './COMPONENTS/registration/registration.component';
import {HomePageComponent} from './COMPONENTS/home-page/home-page.component';
import {PageDetailsComponent} from './UNDERCOMPONENTS/underUnderComponents/page-details/page-details.component';
import {AccueilComponent} from './COMPONENTS/accueil/accueil.component';
import {AuthGuard} from './GUARDS/auth.guard';
import {AuthService} from './SERVICES/Auth.service';
import {ErrorComponent} from './COMPONENTS/error/error.component';
import {ChatComponent} from './COMPONENTS/chat/chat.component';
import {TodosComponent} from './COMPONENTS/todos/todos.component';
import {TodosUpdateComponent} from './UNDERCOMPONENTS/todos-update/todos-update.component';
// ROUTES
const routes: Routes = [
  // Accueil
  {
    path: '',
    component: AccueilComponent
  },
  // Toutes les pages
  {
    path: 'pages',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  // Informations Page
  {
    path: 'pages/:id',
    component: PageDetailsComponent,
    canActivate: [AuthGuard]
  },
  // Tous les messages
  {
    path: 'messages',
    component:ChatComponent,
    canActivate: [AuthGuard]
  },
  // Connexion
  {
    path: 'login',
    component: LoginComponent
  },
  // Inscription
  {
    path: 'registration',
    component: RegistrationComponent
  },
  // Tâches
  {
    path:'todos',
    component: TodosComponent,
    canActivate: [AuthGuard]
  },
  // Modification Tâches
  {
    path:'todos/:id',
    component:TodosUpdateComponent,
    canActivate: [AuthGuard]
  },
  /* Error mode with errorComponent
     Pages Erreur
  */
  {
    path: '**',
    component: ErrorComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  providers: [AuthService, AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
