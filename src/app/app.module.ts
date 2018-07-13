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
import { CitiesComponent } from './components/cities/cities.component';
import { LegalentityComponent } from './components/legalentity/legalentity.component';
import { LegalentityService } from './services/legalentity/legalentity.service';
import { CitiesService } from './services/cities/cities.service';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityService } from './services/activity/activity.service';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ExchangeService } from './services/exchange/exchange.service';
import { AccountService } from './services/account/account.service';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { IsplataComponent } from './components/isplata/isplata.component';
import { UplataComponent } from './components/uplata/uplata.component';
import { NaplataComponent } from './components/naplata/naplata.component';
import { PrenosComponent } from './components/prenos/prenos.component';
import { IndividualaccountComponent } from './components/individualaccount/individualaccount.component';
import { LegalaccountComponent } from './components/legalaccount/legalaccount.component';
import { AnalysisService } from './services/analysis/analysis.service';
import { ReportComponent } from './components/report/report.component';

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
    LegalentityComponent,
    ActivityComponent,
    ExchangeComponent,
    AccountComponent,
    HomeComponent,
    IsplataComponent,
    UplataComponent,
    NaplataComponent,
    PrenosComponent,
    IndividualaccountComponent,
    LegalaccountComponent,
    ReportComponent
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
  
  
  providers: [LoginService,StatesService,IndividualService,CurrencyService,LegalentityService,ActivityService,CitiesService,AccountService,ExchangeService,AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
