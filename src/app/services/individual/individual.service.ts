import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Individual } from '../../individual';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IndividualService {

  constructor(private http: HttpClient) { }


  addIndividual(individual: Individual) : Observable<any>{

    return this.http.post<any>('http://localhost:8090/individual/addindividual', individual, httpOptions);

  }


  getAllIndividualsOfBank(id): Observable<any>{

    return this.http.get<any>('http://localhost:8090/individual/getallindividualofbank/' + id);

  }


  deleteIndividual(id): Observable<any>{

    return this.http.get<any>('http://localhost:8090/individual/deleteindividual/' + id);

  }

}
