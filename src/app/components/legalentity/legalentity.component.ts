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

  legalentity: LegalentityComponent;
  legalentityedit: any={};
  legalentityadd: any={};
  bank: Bank;
  legalentitys: LegalEntity[];
  constructor(private legalentityservice: LegalentityService, private loginservice: LoginService) { }

  ngOnInit() {

    this.bank = this.loginservice.getLocalStore();
    this.legalentityservice.getAllLegalofBank(this.bank.id)
    .subscribe(data => {this.legalentitys = data})

  }


  deleteLegalEntity(id): void{

    this.legalentityservice.deleteLegaEntity(id).toPromise()
    .then(data =>{
      this.legalentitys = this.legalentitys.filter(el => el.id != id);

  })


  }



  editLegalEntity(): void{

    this.bank = this.loginservice.getLocalStore();
    
    this.legalentityservice.editlegalEntity(this.legalentityedit)
    .subscribe(data =>{this.legalentity=data;
      this.legalentityservice.getAllLegalofBank(this.bank.id)
      .subscribe(data =>{this.legalentitys = data
       
      });
    
    });

  }


  findlegalentity(idlegal): void{

    this.bank = this.loginservice.getLocalStore();

    this.legalentityservice.findLegalEntity(idlegal,this.bank.id)
    .subscribe(data =>{this.legalentityedit = data});


  }



  addLegalentity(): void{

    this.bank = this.loginservice.getLocalStore();
    
    this.legalentityadd.bankid = this.bank.id;

    this.legalentityservice.addLegalEntity(this.legalentityadd)
    .subscribe(data =>{this.legalentity = data;
      

      this.legalentityservice.getAllLegalofBank(this.bank.id)
      .subscribe(data =>{this.legalentitys = data
       
      });
    
    });



  }

}
