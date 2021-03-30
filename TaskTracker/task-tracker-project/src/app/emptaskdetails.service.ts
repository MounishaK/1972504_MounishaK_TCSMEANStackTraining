import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackerDetails } from './trackerdetails';


@Injectable({
  providedIn: 'root'
})
export class EmptaskdetailsService {

  constructor(public http:HttpClient) { }

  loadEmployeeTaskDetails():Observable<TrackerDetails[]>
  {
    return this.http.get<TrackerDetails[]>("/assets/taskdetails.json");
  }
}
