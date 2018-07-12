import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }


  getAllIndivicualAccountofbank(idbank): Observable<any>{

    return this.http.get<any>('http://localhost:8090/account/getIndividualAccountsOfBank/' + idbank);


  }


}
