import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange/exchange.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  addExchange:any={};
  bank:any={};
  constructor(private exchangeService:ExchangeService,private loginService:LoginService) { }

  ngOnInit() {

    this.getBank();
  }

  addExchangeRate(){
    console.log(this.addExchange);
    this.exchangeService.addExchangeRates(this.addExchange).subscribe(data => {
     if(data==null){
      alert("Dodavanje kursne liste nije uspesno.")
    }else{
      alert("Uspesno ste dodali kursnu listu")
    }
   // this.getCurrencies();
  });
  }

  getBank(){
     this.bank=this.loginService.getLocalStore();
     this.addExchange.idbank=this.bank.id;
  }

}
