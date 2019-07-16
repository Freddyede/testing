import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './COMPONENTS/registration/registration.component';
import { HomePageComponent } from './COMPONENTS/home-page/home-page.component';
import { NavbarComponent } from './UNDERCOMPONENTS/navbar/navbar.component';
import { PageComponent } from './UNDERCOMPONENTS/page/page.component';
import { PageDetailsComponent } from './UNDERCOMPONENTS/underUnderComponents/page-details/page-details.component';
import { AccueilComponent } from './COMPONENTS/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageComponent,
    NavbarComponent,
    PageComponent,
    PageDetailsComponent,
    AccueilComponent,
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
