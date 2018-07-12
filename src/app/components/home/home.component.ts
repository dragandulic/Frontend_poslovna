import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

  uplata(){
    
  }

  isplata(){
    this.nalogZaIsplatu=true;
  }

  naplata(){
    this.nalogZaNaplatu=true;
  }

  prenos(){
    this.nalogZaPrenos=true;
  }

}
