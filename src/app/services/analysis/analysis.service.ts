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

  savePaymentCheck(name: any): Observable<any> {
    return this.http.get('http://localhost:8090/analysis/save/xml/'+name, httpOptions);
  }

  getNaplata(name: any): Observable<any> {
    return this.http.get('http://localhost:8090/analysis/payment/'+name, httpOptions);
  }

  saveNaplata(name: any): Observable<any> {
    return this.http.get('http://localhost:8090/analysis/save/payment/'+name, httpOptions);
  }

  getPrenos(name: any): Observable<any> {
    return this.http.get('http://localhost:8090/analysis/xml-prenos/'+name, httpOptions);
  }

  savePrenos(name: any): Observable<any> {
    return this.http.get('http://localhost:8090/analysis/save/xml-transfer/'+name, httpOptions);
  }

}
