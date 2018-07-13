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
export class ReportService {

  constructor(private http: HttpClient) { }
  
  getBankReport(id: any): Observable<Blob> {

    //const headers = new HttpHeaders({'Content-Type': 'application/pdf'});
    return this.http.get('http://localhost:8090/reports/getAccounts/'+id, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'blob' });
  }
}
