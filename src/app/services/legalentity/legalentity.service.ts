import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LegalentityService {

  constructor(private http: HttpClient) { }


  getAllLegalofBank(id): Observable<any>{

    return this.http.get<any>('http://localhost:8090/legalEntity/getlegalsofbank/' + id);

  }



}
