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
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencies (): Observable<any>{
    return this.http.get<any>('http://localhost:8090/currency/getCurrencies');
  }

  getCurrency (id): Observable<any>{
    return this.http.get<any>('http://localhost:8090/currency/getCurrency/'+id);
  }

  addCurrency (currency): Observable<any>{
    return this.http.post<any>('http://localhost:8090/currency/addCurrency', currency, httpOptions);
  }

  deleteCurrency (id): Observable<any>{
    return this.http.delete<any>('http://localhost:8090/currency/deleteCurrency/'+id, httpOptions);
  }

  editCurrency (id,currency): Observable<any>{
    return this.http.put<any>('http://localhost:8090/currency/editCurrency/'+id, currency);
  }

}