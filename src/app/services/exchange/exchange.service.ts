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
export class ExchangeService {

  constructor(private http: HttpClient) { }

   addExchangeRates(exchangeRate:any): Observable<any>{
    return this.http.post<any>('http://localhost:8090/exchangerate/newExchangeRate', exchangeRate, httpOptions);
  }


}
