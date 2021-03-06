import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { StatesComponent } from './components/states/states.component';
import { IndividualComponent } from './components/individual/individual.component';
import { CurrencyComponent } from './components/currency/currency.component';

import { LegalentityComponent } from './components/legalentity/legalentity.component';
import { CitiesComponent } from './components/cities/cities.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { IsplataComponent } from './components/isplata/isplata.component';
import { UplataComponent } from './components/uplata/uplata.component';
import { NaplataComponent } from './components/naplata/naplata.component';
import { PrenosComponent } from './components/prenos/prenos.component';
import { LegalaccountComponent } from './components/legalaccount/legalaccount.component';
import { IndividualaccountComponent } from './components/individualaccount/individualaccount.component';
import { ReportComponent } from './components/report/report.component';



const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'navbar', component: NavbarComponent,
    children:[
      {path: 'states', component: StatesComponent},
      {path: 'individual', component: IndividualComponent},
      {path: 'currency', component: CurrencyComponent},
      {path: 'legalentity', component: LegalentityComponent},
      {path: 'cities', component: CitiesComponent},
      {path: 'report', component: ReportComponent},
      {path: 'activity', component: ActivityComponent},
      {path: 'exchange', component: ExchangeComponent},
      {path: 'acount', component: AccountComponent, 
      children:[
        {path: 'legalaccount', component: LegalaccountComponent},
        {path: 'individualaccount', component: IndividualaccountComponent}
      ]
      },
      {path: 'home', component: HomeComponent,
      children:[
        {path: 'isplata/:type', component: IsplataComponent},
        {path: 'uplata/:type', component: UplataComponent},
        {path: 'naplata/:type', component: NaplataComponent},
        {path: 'prenos/:type', component: PrenosComponent}
      ]
    
    }
    ]

  }
 // { path: '/navbar', pathMatch: 'full'},
 // {path: 'navbar', component: NavbarComponent,
   //  children:[
      
  
    // ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
