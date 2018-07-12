import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange/exchange.service';
import { LoginService } from '../../services/login/login.service';
import { CurrencyService } from '../../services/currency/currency.service';
import { Currency } from '../../currency';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  addExchange:any={};
  bank:any={};
  rateInCurrency:any={};
  newRateInCurrency:any={};
  currencies:Currency [];
  exChangeRates:any[];
  currentExchangeRate:any={};
  currentRates:any[];
  btnIf:boolean=false;

  constructor(private exchangeService:ExchangeService,private loginService:LoginService,private currencyService:CurrencyService) { }

  ngOnInit() {

    this.getBank();
    this.getCurrencies();
    this.getExchangeRate();
  }

  getCurrencies(){
    this.currencyService.getCurrencies().subscribe(data => this.currencies=data.currencies);
  }

  getExchangeRate(){
    this.exchangeService.getExchangeRates(this.bank.id).subscribe(data => this.exChangeRates=data);
  }

  addExchangeRate(){
    console.log(this.addExchange);
    this.exchangeService.addExchangeRates(this.addExchange).subscribe(data => {
     if(data==null){
      alert("Dodavanje kursne liste nije uspesno.")
    }else{
      alert("Uspesno ste dodali kursnu listu")
    }
    this.getExchangeRate();
  });
  }

  addRateInCurrency(){
    this.newRateInCurrency.exchangerateid=this.currentExchangeRate.id;
    this.exchangeService.addRate(this.newRateInCurrency).subscribe(data=>{ 
    if(data==null){
      alert("Dodavanje  nije uspesno.")
    }else{
      alert("Uspesno ste dodali")
    }
    this.getRates();
    });
    
  }

  getBank(){
     this.bank=this.loginService.getLocalStore();
     console.log(this.bank);
     this.addExchange.idbank=this.bank.id;
  }

  clickCurrencyPrimary(currency){
      this.newRateInCurrency.primary=currency;
  }

  clickCurrencyChangeTo(currency){
    this.newRateInCurrency.changeto=currency;
}

  nowExchangeRate(exchangeRate){
    this.currentExchangeRate=exchangeRate;
    this.btnIf=true;
    this.getRates();
    
}

  getRates(){
    this.exchangeService.getRates(this.currentExchangeRate.id).subscribe(data=>this.currentRates=data);
  }


}
