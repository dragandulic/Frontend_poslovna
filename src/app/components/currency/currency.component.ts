import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency/currency.service';
import { Currency } from '../../currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  
  currencies:Currency [];
  editCurrency: any={};
 

  constructor(private currencyService:CurrencyService) { }

  ngOnInit() {
   
    this.getCurrencies();
  }

  getCurrencies(){
    this.currencyService.getCurrencies().subscribe(data => this.currencies=data.currencies);
  }

  deleteCurrency(id){
    this.currencyService.deleteCurrency(id).subscribe(data => {
      if(data==null){
        alert("Brisanje valute nije uspesno.")
      }else{
        alert("Uspesno brisanje valute")
      }
      this.getCurrencies();
    });
  }
 
  search(id){

    this.currencyService.getCurrency(id).subscribe(data =>{
      this.editCurrency=data;
      this.editCurrency.country=data.country.name;
    });
  }

  }