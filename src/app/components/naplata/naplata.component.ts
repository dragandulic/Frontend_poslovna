import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AnalysisService } from '../../services/analysis/analysis.service';

@Component({
  selector: 'app-naplata',
  templateUrl: './naplata.component.html',
  styleUrls: ['./naplata.component.scss']
})
export class NaplataComponent implements OnInit {

  naplata: any={};
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
      this.analysisService.getNaplata(type)
      .subscribe(data=> {this.naplata=data;
        this.valuta=data.paymentCurrency.password;
        this.racunD=data.debtorAccount.accountnum;
        this.racunP=data.accountCreditor.accountnum;
      
      });
    }



  }

  load1(){
    this.router.navigateByUrl('navbar/home/naplata/nalog_za_naplatu_1');
    location.reload();
  }

  load2(){
    this.router.navigateByUrl('navbar/home/naplata/nalog_za_naplatu_2');
    location.reload();
  }

  confirmClick(){
    const type = this.route.snapshot.params.type;
    this.analysisService.saveNaplata(type).subscribe();
  }

}
