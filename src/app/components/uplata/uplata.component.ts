import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AnalysisService } from '../../services/analysis/analysis.service';

@Component({
  selector: 'app-uplata',
  templateUrl: './uplata.component.html',
  styleUrls: ['./uplata.component.scss']
})
export class UplataComponent implements OnInit {

  uplata: any={};
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
      this.analysisService.getUplata(type)
      .subscribe(data=>{this.uplata=data;
        this.valuta=data.paymentCurrency.password;
        this.racun=data.accountCreditor.accountnum;
      
      });
      
    }




  }

  load1(){
    this.router.navigateByUrl('navbar/home/uplata/nalog_za_uplatu_1');
    location.reload();
  }

  load2(){
    this.router.navigateByUrl('navbar/home/uplata/nalog_za_uplatu_2');
    location.reload();
  }

  confirmClick(){

    const type = this.route.snapshot.params.type;
    this.analysisService.saveUplata(type).subscribe();
  }

}
