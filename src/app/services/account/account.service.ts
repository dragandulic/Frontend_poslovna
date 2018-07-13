import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Account } from '../../account';
import { AccountClosure } from '../../accountclosure';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }


  getAllIndivicualAccountofbank(idbank): Observable<any>{

    return this.http.get<any>('http://localhost:8090/account/getIndividualAccountsOfBank/' + idbank);


  }

  getAllLegalAccountofbank(idbank): Observable<any>{

    return this.http.get<any>('http://localhost:8090/account/getLegalAccountsOfBank/' + idbank);


  }


  findaccount(findacc): Observable<any>{
    
    return this.http.put<any>('http://localhost:8090/account/findaccount', findacc, httpOptions);

  }
  

  addaccountIndividual(addaccount: Account): Observable<any>{

    return this.http.post<any>('http://localhost:8090/account/addindividualaccount', addaccount, httpOptions);

  }

  addaccountLegal(addaccount: Account): Observable<any>{

    return this.http.post<any>('http://localhost:8090/account/addlegalaccount', addaccount, httpOptions);

  }


  accountclosure(accountclosur: AccountClosure): Observable<any>{

    return this.http.post<any>('http://localhost:8090/closure/addClosure',accountclosur,httpOptions);

  }


}
