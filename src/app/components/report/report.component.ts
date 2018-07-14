import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { ReportService } from '../../services/report/report.service';
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  report:any={};
  bank:any={};
  bankId:any;

  constructor(private loginService:LoginService,private reportService:ReportService) { }

  ngOnInit() {
  }

  getReport(){
    this.bank=this.loginService.getLocalStore();
    this.bankId=this.bank.id;
    this.reportService.getBankReport(this.bankId).subscribe(data=>{

      let file = new Blob([data], { type: 'application/pdf' });



      FileSaver.saveAs(file, 'Bank_accounts');
  });
}

 sendAccountReport(){

  this.reportService.getClientReport(this.report).subscribe(data=>{

    let file = new Blob([data], { type: 'application/pdf' });



    FileSaver.saveAs(file, 'Izvestaj_Klijenta_'+this.report.datefrom+'_'+this.report.dateto);
});

 }

}
