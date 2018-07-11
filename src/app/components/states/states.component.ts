import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatesService } from '../../services/states/states.service';
import { state } from '../../state';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  countries: state[];
  deleteCountry: state;
  newCountry: any={};
  editCountry: any={};
  editId: any;
  searchCountry: any={};

  constructor(private statesService: StatesService) { }

  ngOnInit() {

    this.statesService.getCountries()
    .subscribe(data => this.countries=data);
 
  }

  search(id){
    this.editId=id;
    this.statesService.searchCountry(id)
    .subscribe(data => this.editCountry=data);
  }

  edit(){

    this.statesService.editCountry(this.editId,this.editCountry)
    .subscribe(data => {this.editCountry=data;
    this.statesService.getCountries()
    .subscribe(data => this.countries=data);
    });
  }

  delete(id){
       
    this.statesService.deleteCountry(id).toPromise()
      .then(data => {
        this.countries = this.countries.filter(el => el.id != id);

      })
  }

  add(){

    this.statesService.addCountry(this.newCountry).toPromise()
    .then(data => {this.newCountry=data;
    this.statesService.getCountries()
    .subscribe(data => this.countries=data);
    
    });
  }

  search1(){
    
        this.statesService.searchCountry1(this.searchCountry)
        .subscribe(data => this.countries = data);
      }

}
