import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './COMPONENTS/login/login.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './COMPONENTS/registration/registration.component';
import { HomePageComponent } from './COMPONENTS/home-page/home-page.component';
import { NavbarComponent } from './UNDERCOMPONENTS/navbar/navbar.component';
import { PageComponent } from './UNDERCOMPONENTS/page/page.component';
import { PageDetailsComponent } from './UNDERCOMPONENTS/underUnderComponents/page-details/page-details.component';
import { AccueilComponent } from './COMPONENTS/accueil/accueil.component';

=======
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './undercomponents/navbar/navbar.component';
import { PageComponent } from './undercomponents/page/page.component';
import { PageDetailsComponent } from './undercomponents/underUnderComponents/page-details/page-details.component';
import { AccueilComponent } from './components/accueil/accueil.component';
>>>>>>> develop
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageComponent,
    NavbarComponent,
    PageComponent,
    PageDetailsComponent,
<<<<<<< HEAD
    AccueilComponent,
=======
    AccueilComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
