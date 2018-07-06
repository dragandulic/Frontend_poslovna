import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { StatesComponent } from './components/states/states.component';
import { IndividualComponent } from './components/individual/individual.component';

const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'navbar', component: NavbarComponent,
    children:[
      {path: 'states', component: StatesComponent},
      {path: 'individual', component: IndividualComponent}
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
