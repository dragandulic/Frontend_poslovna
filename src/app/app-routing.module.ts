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



const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'navbar', component: NavbarComponent,
    children:[
      {path: 'states', component: StatesComponent},
      {path: 'individual', component: IndividualComponent},
      {path: 'currency', component: CurrencyComponent},
      {path: 'legalentity', component: LegalentityComponent},
      {path: 'cities', component: CitiesComponent},
      {path: 'activity', component: ActivityComponent},
      {path: 'exchange', component: ExchangeComponent},
      {path: 'acount', component: AccountComponent}
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
