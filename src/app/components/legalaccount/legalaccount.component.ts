import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { LoginService } from '../../services/login/login.service';
import { CurrencyService } from '../../services/currency/currency.service';
import { Account } from '../../account';
import { Bank } from '../../Bank';
import { Currency } from '../../currency';
import { LegalentityService } from '../../services/legalentity/legalentity.service';
import { LegalEntity } from '../../legalentity';
import { AccountClosure } from '../../accountclosure';

@Component({
  selector: 'app-legalaccount',
  templateUrl: './legalaccount.component.html',
  styleUrls: ['./legalaccount.component.scss']
})
export class LegalaccountComponent implements OnInit {

  findacc: any={};
  jmbglegal: any={};
  addacc: any={};
  legalaccounts: Account[];
  currencies: Currency[];
  bank: Bank;
  legaljmbg: LegalEntity;
  retacc: Account;
  greska: boolean;
  accountclosureret: AccountClosure;
  accountclosureadd: any={};
  constructor(private accountService: AccountService, private loginservice: LoginService, private currencyService: CurrencyService, private legalservice: LegalentityService) { }

  ngOnInit() {
    
    this.bank = this.loginservice.getLocalStore();

    this.accountService.getAllLegalAccountofbank(this.bank.id)
    .subscribe(data => {this.legalaccounts = data});

    this.currencyService.getCurrencies()
    .subscribe(data => {this.currencies = data.currencies;
      
    });


  }

  refreslist(): void{
    this.bank = this.loginservice.getLocalStore();
   
    this.accountService.getAllLegalAccountofbank(this.bank.id)
    .subscribe(data =>{this.legalaccounts = data;
      
    });

  }

  findaccount(): void{
    this.accountService.findaccount(this.findacc)
    .subscribe(data =>{this.legalaccounts = data;
      this.findacc.accountnum='';
    })

  }


  selectChangeHandler (event : any){
  
    this.addacc.currencyid =  event.target.value;
  }


  findlegal(): void{
    this.greska = false;
    this.bank = this.loginservice.getLocalStore();

    this.jmbglegal.bankId = this.bank.id;

    this.legalservice.findLegalJMBGOfBank(this.jmbglegal)
    .subscribe(data => {this.legaljmbg = data;
      this.addacc.legalEntityid = this.legaljmbg.id;
    },error =>{
      this.greska=true;
      }
     
      
      
    );


  }

  clean(){
    this.greska = false;
  }

  addAccountLegal(): void{

    this.bank = this.loginservice.getLocalStore();

    this.addacc.bankid = this.bank.id;
    this.accountService.addaccountLegal(this.addacc)
    .subscribe(data =>{this.retacc = data;
      if(this.retacc.accountnum==undefined){
        alert("Broj racuna je zauzet!");
      }
      this.accountService.getAllLegalAccountofbank(this.bank.id)
    .subscribe(data =>{this.legalaccounts = data;
      
    });
    this.addacc.bankid = '';
    this.addacc.currencyid = '';
    this.addacc.legalEntityid= '';
    this.addacc.accountnum = '';
    this.legaljmbg.name = '';
    this.legaljmbg.shortName = '';
    this.jmbglegal.jmbg = '';
    this.legaljmbg.address = '';
    
    });

  }


  deleteaccount(): void{

    this.accountService.accountclosure(this.accountclosureadd)
    .subscribe(data => {this.accountclosureret = data});

  }

}
