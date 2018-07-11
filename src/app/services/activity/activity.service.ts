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
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivities (): Observable<any>{
    return this.http.get<any>('http://localhost:8090/activity/getAllActivities');
  }

  getActivity (id): Observable<any>{
    return this.http.get<any>('http://localhost:8090/activity/getActivity/'+id);
  }

  addActivity (activity): Observable<any>{
    return this.http.post<any>('http://localhost:8090/activity/addActivity', activity, httpOptions);
  }

  deleteActivity (id): Observable<any>{
    return this.http.delete<any>('http://localhost:8090/activity/deleteActivity/'+id, httpOptions);
  }

  editActivity (activity): Observable<any>{
    return this.http.put<any>('http://localhost:8090/activity/editActivity/',activity);
  }

}
