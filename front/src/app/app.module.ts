import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

// COMPONENTS
import { AppComponent } from './app.component';
import { COMPONENTS } from './CONSTANTS/COMPONENTS.const';
import { TodosComponent } from './COMPONENTS/todos/todos.component';
import { TodosUpdateComponent } from './UNDERCOMPONENTS/todos-update/todos-update.component';
import { ProblemsComponent } from './COMPONENTS/problems/problems.component';
@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    TodosComponent,
    TodosUpdateComponent,
    ProblemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
