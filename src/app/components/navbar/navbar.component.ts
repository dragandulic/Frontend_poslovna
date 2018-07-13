import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bank:any={};
  //public user:Reguser;
  message:string;

  constructor(/*private _logService:LogService,*/private _router: Router,private loginService:LoginService) { }

  ngOnInit() {

   /* this.user=this._logService.getLocalStore();*/
    this.getBank();
 
  }

  logout(){
    this.loginService.delLocalStore();
  }

  getBank(){
    this.bank=this.loginService.getLocalStore();
    console.log(this.bank);
   
 }



  /*logout(){
    this._logService.delLocalStore();
    window.location.reload(true);
    this._router.navigateByUrl("firstpage/login");
  }*/


}
