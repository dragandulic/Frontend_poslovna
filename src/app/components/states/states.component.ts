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

  constructor(private statesService: StatesService) { }

  ngOnInit() {

    this.statesService.getCountries()
    .subscribe(data => this.countries=data);
 
  }

}
