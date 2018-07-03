import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //public user:Reguser;
  message:string;

  constructor(/*private _logService:LogService,*/private _router: Router) { }

  ngOnInit() {

   /* this.user=this._logService.getLocalStore();*/

 
  }

  /*logout(){
    this._logService.delLocalStore();
    window.location.reload(true);
    this._router.navigateByUrl("firstpage/login");
  }*/


}
