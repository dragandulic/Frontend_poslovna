import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { LoginService } from '../../services/login/login.service';
import { Bank } from '../../Bank';
import { CurrencyService } from '../../services/currency/currency.service';
import { Currency } from '../../currency';
import { IndividualService } from '../../services/individual/individual.service';
import { IndividualComponent } from '../individual/individual.component';
import { Individual } from '../../individual';
import { Account } from '../../account';
import { AccountClosure } from '../../accountclosure';

@Component({
  selector: 'app-individualaccount',
  templateUrl: './individualaccount.component.html',
  styleUrls: ['./individualaccount.component.scss']
})
export class IndividualaccountComponent implements OnInit {

  findacc: any={};
  addacc: any={};
  jmbgindividual: any={};
  individualjmbg: Individual;
  currencies: Currency[];
  retacc: Account;
  individualaccounts: Account[];
  bank: Bank;
  greska: boolean;
  accountclosureret: AccountClosure;
  accountclosureadd: any={};
  constructor(private accountService: AccountService, private loginservice: LoginService, private currencyService: CurrencyService,private individualservice: IndividualService) { }

  ngOnInit() {

    this.bank = this.loginservice.getLocalStore();
   
    this.accountService.getAllIndivicualAccountofbank(this.bank.id)
    .subscribe(data =>{this.individualaccounts = data;
      
    });

    this.currencyService.getCurrencies()
    .subscribe(data => {this.currencies = data.currencies;
      
    });


  }

  refreslist(): void{
    this.bank = this.loginservice.getLocalStore();
   
    this.accountService.getAllIndivicualAccountofbank(this.bank.id)
    .subscribe(data =>{this.individualaccounts = data;
      
    });

  }


  findaccount(): void{
    this.accountService.findaccount(this.findacc)
    .subscribe(data =>{this.individualaccounts = data;
      this.findacc.accountnum='';
    })

  }


  addAccountIndividual(): void{

    this.bank = this.loginservice.getLocalStore();

    this.addacc.bankid = this.bank.id;
    this.accountService.addaccountIndividual(this.addacc)
    .subscribe(data =>{this.retacc = data;
      if(this.retacc.accountnum==undefined){
        alert("Broj racuna je zauzet!");
      }
      this.accountService.getAllIndivicualAccountofbank(this.bank.id)
    .subscribe(data =>{this.individualaccounts = data;
      
    });
    this.addacc.bankid = '';
    this.addacc.currencyid = '';
    this.addacc.individualid= '';
    this.addacc.accountnum = '';
    this.individualjmbg.name = '';
    this.individualjmbg.surname = '';
    this.jmbgindividual.jmbg = '';
    this.individualjmbg.address = '';
    
    });

  }


  selectChangeHandler (event : any){
  
    this.addacc.currencyid =  event.target.value;
  }
  
  clean(){
    this.greska = false;
  }

  findindividual(): void{
    
    this.bank = this.loginservice.getLocalStore();

    this.jmbgindividual.bankId = this.bank.id;

    this.individualservice.findIndividualJMBGOfBank(this.jmbgindividual)
    .subscribe(data => {this.individualjmbg = data;
      this.addacc.individualid = this.individualjmbg.id;
      
    },error =>{
      this.greska=true;
      }
    
  );


  }


  deleteaccount(): void{

    this.accountService.accountclosure(this.accountclosureadd)
    .subscribe(data => {this.accountclosureret = data});

  }

}
