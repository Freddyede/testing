import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './undercomponents/navbar/navbar.component';
import { PageComponent } from './undercomponents/page/page.component';
import { PageDetailsComponent } from './undercomponents/underUnderComponents/page-details/page-details.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SendingMessagesComponent } from './components/sending-messages/sending-messages.component';
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
    MessagesComponent,
    SendingMessagesComponent
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
