import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/observable/of';
/*import {Ng2Webstorage} from 'ngx-webstorage';
import {MatListModule} from '@angular/material/list';*/
import { HttpClientModule } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { StatesComponent } from './components/states/states.component';
import { StatesService } from './services/states/states.service';
import { LoginService } from './services/login/login.service';
import {Ng2Webstorage} from 'ngx-webstorage';
import { IndividualComponent } from './components/individual/individual.component';
import { IndividualService } from './services/individual/individual.service';
import { CurrencyService } from './services/currency/currency.service';
import { CitiesComponent } from './components/cities/cities/cities.component';
import { LegalentityComponent } from './components/legalentity/legalentity.component';
import { LegalentityService } from './services/legalentity/legalentity.service';

/*
const appRoutes:Routes=[
  {path:'navbar',component:NavbarComponent,
  children:[
    {path:'login',component:LoginComponent},
    {path:'country',component:StatesComponent},
  ]},
  
  
  
  
];
  
  */

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    StatesComponent,
    IndividualComponent,
    CitiesComponent,
    CurrencyComponent,
    LegalentityComponent
  ],
  imports: [
    BrowserModule,
   // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2Webstorage
  /*  MatListModule,
    
    ReactiveFormsModule*/
  ],
  
  providers: [LoginService,StatesService,IndividualService,CurrencyService,LegalentityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
