import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  private activities:any[];
  editActivity:any={};
  addActivity:any={};


  constructor(private activityService:ActivityService) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities(){
    this.activityService.getActivities().subscribe(data => this.activities=data);
  }

  add(){
    this.activityService.addActivity(this.addActivity).subscribe(data => 
      {
        if(data==null){
          alert("Nije uspesno dodavanje delatnosti.")
        }else{
          alert("Uspesno dodavanje delatnosti")
        }
        this.getActivities();
      });
  }

  deleteActivity(id){
    this.activityService.deleteActivity(id).subscribe(data => {this.activities=data;this.getActivities();});
  }

  search(id){
    this.activityService.getActivity(id).subscribe(data => {this.editActivity=data});
  }

  editA(){
    this.activityService.editActivity(this.editActivity).subscribe(data => 
      {
        if(data==null){
          alert("Nije uspesna izmena delatnosti.")
        }else{
          alert("Uspesna izmena delatnosti")
        }
        this.getActivities();
      });
  }
}
