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
import { StatesComponent } from './components/states/states.component';
import { StatesService } from './services/states/states.service';


const appRoutes:Routes=[
  {path:'navbar',component:NavbarComponent,
  children:[
    {path:'login',component:LoginComponent},
    {path:'country',component:StatesComponent},
  ]},
  
  
  
  
];
  
  

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  /*  MatListModule,
    Ng2Webstorage,
    ReactiveFormsModule*/
  ],
  providers: [StatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
