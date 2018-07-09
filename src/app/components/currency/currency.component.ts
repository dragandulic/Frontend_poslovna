import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency/currency.service';
import { Currency } from '../../currency';
import { StatesService } from '../../services/states/states.service';
import { state } from '../../state';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  
  currencies:Currency [];
  editCurrency: any={};
  addCurrency: any={};
  countries: state[];
  private i:number;
  countriesTemp:state;
  len:number;
  clickedCountry:state;
 

  constructor(private currencyService:CurrencyService,private statesService: StatesService) { }

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

    this.statesService.getCountries()
    .subscribe(data => {
      for (let i=0;i<data.length;i++) {
        if(data[i].name==(this.editCurrency.country)){
          this.countriesTemp=data[0];
          data[0]=data[i];
          data[i]= this.countriesTemp;
  
        }
      }
        this.countries=data;
    });
  
  }

  add(){

    this.addCurrency.country=this.clickedCountry;
      this.currencyService.addCurrency(this.addCurrency).subscribe(data => {
        if(data==null){
          alert("Niste uspesno dodali valutu.")
        }else{
          alert("Uspesno dodavanje valute")
        }
        this.getCurrencies();
      });
   }

  

  getCountries(){
    this.statesService.getCountries()
    .subscribe(data => this.countries=data);
  }

  clickCountry(clickedCountry){
    this.clickedCountry=clickedCountry;
  }
}