import { Component, OnInit } from '@angular/core';
import { LegalentityService } from '../../services/legalentity/legalentity.service';
import { Bank } from '../../Bank';
import { LoginService } from '../../services/login/login.service';
import { LegalEntity } from '../../legalentity';

@Component({
  selector: 'app-legalentity',
  templateUrl: './legalentity.component.html',
  styleUrls: ['./legalentity.component.scss']
})
export class LegalentityComponent implements OnInit {

  bank: Bank;
  legalentitys: LegalEntity[];
  constructor(private legalentityservice: LegalentityService, private loginservice: LoginService) { }

  ngOnInit() {

    this.bank = this.loginservice.getLocalStore();
    this.legalentityservice.getAllLegalofBank(this.bank.id)
    .subscribe(data => {this.legalentitys = data})

  }

}
