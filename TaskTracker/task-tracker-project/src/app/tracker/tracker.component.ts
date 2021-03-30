import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { TrackerService } from '../tracker.service';
import { TrackerDetails } from '../trackerdetails';
//import { FormatDate } from '@angular/common';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  /*trackerRef = new FormGroup({
    empid:new FormControl(),
    empname:new FormControl(),
    task:new FormControl(),
    deadline:new FormControl()
   });

    */
   trackerdetails: Array<TrackerDetails> = new Array();

  
   // msg:string="";


    constructor(public empTask:TrackerService){}
    
    ngOnInit(): void {
    }

    trackerInfo(trackerRef:any)
    {

      console.log(trackerRef);
      this.empTask.storeTasks(trackerRef);

      
      //console.log(this.trackerRef.value);
      console.log(this.empTask.storeTasks(trackerRef)); // all value
       /*
      let empid = this.trackerRef.get("empid")?.value; // get specific control value
      let empname = this.trackerRef.get("empname")?.value;
      let task = this.trackerRef.get("task")?.value; // get specific control value
      let deadline = this.trackerRef.get("deadline")?.value;

      console.log(this.trackerRef);
      //console.log(phoneno);
      console.log("Your Contact Details are Saved Succesfully..!!");
      //this.msg = "Contact Details are successfully saved !";

      let taskdetails = new TrackerDetails(empid, empname, task, deadline);
      this.trackerdetails.push(taskdetails);
      
      */
    }

}
