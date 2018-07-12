import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { LoginService } from '../../services/login/login.service';
import { Bank } from '../../Bank';

@Component({
  selector: 'app-individualaccount',
  templateUrl: './individualaccount.component.html',
  styleUrls: ['./individualaccount.component.scss']
})
export class IndividualaccountComponent implements OnInit {

  individualaccounts: Account[];
  bank: Bank;
  constructor(private accountService: AccountService, private loginservice: LoginService) { }

  ngOnInit() {

    this.bank = this.loginservice.getLocalStore();

    this.accountService.getAllIndivicualAccountofbank(this.bank.id)
    .subscribe(data =>{this.individualaccounts = data});


  }

}
