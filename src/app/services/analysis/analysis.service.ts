import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable()
export class AnalysisService {

  constructor(private http: HttpClient) { }

  getPaymentCheck(name: any): Observable<any> {
    return this.http.get('http://localhost:8090/analysis/payoff/'+name, httpOptions);
  }

}
