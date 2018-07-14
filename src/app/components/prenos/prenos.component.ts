import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AnalysisService } from '../../services/analysis/analysis.service';

@Component({
  selector: 'app-prenos',
  templateUrl: './prenos.component.html',
  styleUrls: ['./prenos.component.scss']
})
export class PrenosComponent implements OnInit {

  prenos: any={};
  valuta: string;
  racunD: any;
  racunP: any;

  constructor(protected route: ActivatedRoute, private router: Router, private analysisService: AnalysisService) { }

  ngOnInit() {

    if (this.route.snapshot.params.type == ':type') {
      
    }
    else if(this.route.snapshot.params.type == 'undefined'){

    }
    else {
      
      const type = this.route.snapshot.params.type;
      this.analysisService.getPrenos(type)
      .subscribe(data =>{this.prenos= data;
        this.valuta=data.paymentCurrency.password;
        this.racunD=data.debtorAccount.accountnum;
        this.racunP=data.accountCreditor.accountnum;
      })
      
    }


  }

  load1(){
    this.router.navigateByUrl('navbar/home/prenos/nalog_za_prenos_1');
    location.reload();
  }

  load2(){
    this.router.navigateByUrl('navbar/home/prenos/nalog_za_prenos_2');
    location.reload();
  }

  confirmClick(){
    const type = this.route.snapshot.params.type;
    this.analysisService.savePrenos(type).subscribe();
  }

}
