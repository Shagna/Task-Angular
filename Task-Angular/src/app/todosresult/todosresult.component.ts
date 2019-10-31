import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-todosresult',
  templateUrl: './todosresult.component.html',
  styleUrls: ['./todosresult.component.css']
})
export class TodosresultComponent implements OnInit {
  todoresult: any[];

  constructor(
    private dataService: DataService
  ) { }

    ngOnInit() {

      this.dataService.sendGetRequest2().subscribe((data: any[])=>{
        console.log(data);
        this.todoresult = data;
      }) 
    }

}
