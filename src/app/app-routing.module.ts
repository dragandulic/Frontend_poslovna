import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [

  { path: '', redirectTo: '/navbar', pathMatch: 'full'},
  {path: 'navbar', component: NavbarComponent,
   children:[
     /* { path: '', component: WelcomepageComponent},
      { path: 'mainpage', component: MainpageComponent},
      { path: 'profile', component: UserprofileComponent},
      { path: 'login', component: LoginComponent},
      { path: 'registration', component: RegisterComponent},
      {path:'viewaccommodation/:id',component:ViewaccommodationComponent},
      {path:'message/:id',component:MessageComponent}*/
    ]


  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
