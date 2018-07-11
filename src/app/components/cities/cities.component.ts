import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatesService } from '../../services/states/states.service';
import { city } from '../../city';
import { CitiesService } from '../../services/cities/cities.service';

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


  constructor(private cityService: CitiesService) { }

  ngOnInit() {

    this.cityService.getCities()
    .subscribe(data => this.cities=data);
 
  }

  search(id){
    this.editId=id;
    this.cityService.searchCity(id)
    .subscribe(data => this.editCity=data);
  }

  edit(){
    console.log(this.editId);
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

  add(){

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
