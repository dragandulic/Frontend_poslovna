import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LegalEntity } from '../../legalentity';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LegalentityService {

  constructor(private http: HttpClient) { }


  getAllLegalofBank(id): Observable<any>{

    return this.http.get<any>('http://localhost:8090/legalEntity/getlegalsofbank/' + id);

  }


  deleteLegaEntity(id): Observable<any>{

    return this.http.delete<any>('http://localhost:8090/legalEntity/deleteLegEnt/' + id );


  }

  editlegalEntity(legalentity: LegalEntity): Observable<any>{

    return this.http.put<any>('http://localhost:8090/legalEntity/editlegalentity',legalentity, httpOptions );

  }


  findLegalEntity(idlegal,idbank): Observable<any>{

    return this.http.get<any>('http://localhost:8090/legalEntity/findlegalofbank/' + idlegal + '/' + idbank );

  }


  addLegalEntity(legalentity: LegalEntity): Observable<any>{

    return this.http.post<any>('http://localhost:8090/legalEntity/addLegEntity',legalentity, httpOptions);

  }


}
