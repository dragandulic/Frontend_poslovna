import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { Bank } from '../../Bank';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  error: boolean;
  user: any={};
  bank: Bank;
  banka1: Bank;
  constructor(private loginservice : LoginService,private router: Router) { }

  ngOnInit() {

 
  }
//

  login(): void{
    this.error = false;
    this.loginservice.login(this.user)
    .subscribe(user => {this.bank = user;
      this.loginservice.setLocalStore(this.bank);
      this.router.navigate(['/navbar']);
      
      
      },
      error => {
        this.error = true;
        console.log("Neispravna lozinka");
      }
    );

  }


}
