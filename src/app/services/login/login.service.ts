import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../useer';
import { LocalStorageService } from 'ngx-webstorage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }


  login(user : User): Observable<any>{

    return this.http.put<any>('http://localhost:8090/login/loginuser', user, httpOptions);

  }

  getCliringt(bank:any={}): Observable<any> {
    return this.http.post('http://localhost:8090/clearing/generateClearing',bank,httpOptions);
  }

  setLocalStore(u){
    this.localStorage.store("loggedin",JSON.stringify(u));
  }

  getLocalStore(){
    var user = JSON.parse(this.localStorage.retrieve('loggedin'));
    return user;
    
  }

  delLocalStore(): void{
    this.localStorage.clear('loggedin');
  }


}
