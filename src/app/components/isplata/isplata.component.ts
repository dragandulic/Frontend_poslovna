import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AnalysisService } from '../../services/analysis/analysis.service';

@Component({
  selector: 'app-isplata',
  templateUrl: './isplata.component.html',
  styleUrls: ['./isplata.component.scss']
})
export class IsplataComponent implements OnInit {

  isplata: any={};
  valuta: string;
  racun: string;

  constructor(protected route: ActivatedRoute, private router: Router, private analysisService: AnalysisService) { }

  ngOnInit() {
    
    if (this.route.snapshot.params.type == ':type') {
      
    }
    else if(this.route.snapshot.params.type == 'undefined'){

    }
    else {
      
      const type = this.route.snapshot.params.type;
      this.analysisService.getPaymentCheck(type)
      .subscribe(data=> {this.isplata=data;
        this.valuta=data.paymentCurrency.password;
        this.racun=data.debtorAccount.accountnum;
        this.isplata.code=140;
      });
      
    }
    
  }

  load1(){
    this.router.navigateByUrl('navbar/home/isplata/nalog_za_isplatu_1');
    location.reload();
  }

  load2(){
    this.router.navigateByUrl('navbar/home/isplata/nalog_za_isplatu_2');
    location.reload();
  }

  load3(){
    this.router.navigateByUrl('navbar/home/isplata/nalog_za_isplatu_3');
    location.reload();
  }

  confirmClick(){
    const type = this.route.snapshot.params.type;
    this.analysisService.savePaymentCheck(type).subscribe();

  }

}
