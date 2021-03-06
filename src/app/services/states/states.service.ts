import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class StatesService {

  constructor(private http: HttpClient) { }

  getCountries (): Observable<any>{

    return this.http.get<any>('http://localhost:8090/countries/getCountries');

  }

  deleteCountry(id): Observable<any>{

    return this.http.delete<any>('http://localhost:8090/countries/deleteCountry/'+id);

  }

  addCountry(country): Observable<any>{

    return this.http.post<any>('http://localhost:8090/countries/addCountry', country, httpOptions);

  }

  searchCountry(id): Observable<any>{

    return this.http.get<any>('http://localhost:8090/countries/getCountry2/'+id);

  }

  editCountry(id,country): Observable<any> {

    return this.http.put<any>('http://localhost:8090/countries/editCountry/'+id, country, httpOptions);

  }

  searchCountry1(country): Observable<any>{

    return this.http.put<any>('http://localhost:8090/countries/searchCountries', country,  httpOptions);

  }

}
