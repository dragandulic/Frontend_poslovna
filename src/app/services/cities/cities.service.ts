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
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCities (): Observable<any>{

    return this.http.get<any>('http://localhost:8090/cities/getCities');

  }

  deleteCity(id): Observable<any>{

    return this.http.delete<any>('http://localhost:8090/cities/deleteCity/'+id);

  }

  addCity(city): Observable<any>{

    return this.http.post<any>('http://localhost:8090/cities/addCity', city, httpOptions);

  }

  searchCity(id): Observable<any>{

    return this.http.get<any>('http://localhost:8090/cities/getCity2/'+id);

  }

  editCity(id,city): Observable<any> {

    return this.http.put<any>('http://localhost:8090/cities/editCity/'+id, city, httpOptions);

  }

  searchCountry1(city): Observable<any>{

    return this.http.put<any>('http://localhost:8090/cities/searchCities', city,  httpOptions);

  }



}
