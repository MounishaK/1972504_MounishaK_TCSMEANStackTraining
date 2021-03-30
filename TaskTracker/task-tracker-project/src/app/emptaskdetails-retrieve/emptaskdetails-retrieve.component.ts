import { Component, OnInit } from '@angular/core';
import { EmptaskdetailsService } from '../emptaskdetails.service';
import { TrackerDetails } from '../trackerdetails';

@Component({
  selector: 'app-emptaskdetails-retrieve',
  templateUrl: './emptaskdetails-retrieve.component.html',
  styleUrls: ['./emptaskdetails-retrieve.component.css']
})
export class EmptaskdetailsRetrieveComponent implements OnInit {

  employeestasks:Array<TrackerDetails> = [];
  constructor(public todolist:EmptaskdetailsService) { }

  ngOnInit(): void {
    this.todolist.loadEmployeeTaskDetails().subscribe(result=>this.employeestasks=result);

  }
  

}
