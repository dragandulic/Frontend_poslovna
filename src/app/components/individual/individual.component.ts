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
  individualedit: any={};
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
    this.bank = this.loginservice.getLocalStore();
    
    this.individual.bankId = this.bank.id;

    this.individualservice.addIndividual(this.individual)
    .subscribe(data =>{this.individual1 = data;
      

      this.individualservice.getAllIndividualsOfBank(this.bank.id)
      .subscribe(data =>{this.individuals = data
       
      });
    
    });

  }

  deleteIndividual(id): void{
   
    this.individualservice.deleteIndividual(id).toPromise()
    .then(data =>{
      this.individuals = this.individuals.filter(el => el.id != id);

  })
  }


  editIndividual(): void{

    this.bank = this.loginservice.getLocalStore();
  
  
    this.individualservice.editIndividual(this.individualedit)
    .subscribe(data =>{this.individual1=data;
      this.individualservice.getAllIndividualsOfBank(this.bank.id)
      .subscribe(data =>{this.individuals = data
       
      });
    
    });


  }


  findIndividual(idindi): void{

    this.bank = this.loginservice.getLocalStore();

    this.individualservice.findIndividualOfBank(idindi,this.bank.id)
    .subscribe(data =>{this.individualedit = data});

  }



}
