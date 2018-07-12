import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  nalogZaUplatu= true;
  nalogZaIsplatu= false;
  nalogZaNaplatu= false;
  nalogZaPrenos= false;


  constructor(protected route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  uplata(){
    this.router.navigateByUrl('/navbar/home/uplata/undefined');
  }

  isplata(){
    this.router.navigateByUrl('/navbar/home/isplata/undefined');
    
  }

  naplata(){
    this.router.navigateByUrl('/navbar/home/naplata/undefined');
  }

  prenos(){
    this.router.navigateByUrl('/navbar/home/prenos/undefined');
  }

}
