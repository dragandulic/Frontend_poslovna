import { Component, OnInit } from '@angular/core';
import { IndividualService } from '../../services/individual/individual.service';
import { Individual } from '../../individual';
import { LoginService } from '../../services/login/login.service';
import { Bank } from '../../Bank';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  individual: any={};
  individual1: Individual;
  bank: Bank;
  individuals: Individual[];
  retPor: string;
  constructor(private individualservice: IndividualService,private loginservice: LoginService) { }

  ngOnInit() {

    this.bank = this.loginservice.getLocalStore();

    this.individualservice.getAllIndividualsOfBank(this.bank.id)
    .subscribe(data =>{this.individuals = data
     
    });


  }

  addIndividual(): void{

    this.individualservice.addIndividual(this.individual)
    .subscribe(data =>{this.individual1 = data});

  }

  deleteIndividual(id): void{
    console.log(id);
    this.individualservice.deleteIndividual(id)
    .subscribe(data =>{this.retPor = data;
    
    },
    error=>{
      alert("Unsuccessful deleting");
    }
  );

  }


}
