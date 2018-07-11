import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatesService } from '../../services/states/states.service';
import { city } from '../../city';
import { CitiesService } from '../../services/cities/cities.service';
import { state } from '../../state';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: city[];
  deleteCity: city;
  newCity: any={};
  editCity: any={};
  editId: any;
  searchCity: any={};
  countries: state[];
  selectedItem: any;
  selectedItem1: any;

  constructor(private cityService: CitiesService, private statesService: StatesService) { }

  ngOnInit() {

    this.cityService.getCities()
    .subscribe(data => this.cities=data);

    this.statesService.getCountries()
    .subscribe(data => this.countries=data);
 
  }

  search(id){
    this.editId=id;
    console.log(this.editId);
    this.cityService.searchCity(id)
    .subscribe(data => this.editCity=data);
  }

  selectChangeHandler1(event:any){
    this.selectedItem1 = event.target.value;
    console.log(this.selectedItem1);
    
  }

  edit(){
    this.editCity.countryS=this.selectedItem1;
    
    this.cityService.editCity(this.editId,this.editCity)
    .subscribe(data => {this.editCity=data;
    this.cityService.getCities()
    .subscribe(data => this.cities=data);
    });
  }

  delete(id){
       
    this.cityService.deleteCity(id).toPromise()
      .then(data => {
        this.cities = this.cities.filter(el => el.id != id);

      })
  }

  selectChangeHandler(event:any){
    this.selectedItem = event.target.value;
    console.log(this.selectedItem);
    
  }

  add(){
    this.newCity.countryS=this.selectedItem;
    this.cityService.addCity(this.newCity).toPromise()
    .then(data => {this.newCity=data;
    this.cityService.getCities()
    .subscribe(data => this.cities=data);
    
    });
  }

  search1(){
    
    this.cityService.searchCountry1(this.searchCity)
    .subscribe(data => this.cities = data);
  }

}
