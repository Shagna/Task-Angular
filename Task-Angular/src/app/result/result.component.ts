import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: any[];


  constructor(
    private dataService: DataService
    ) { }
    
  ngOnInit() {

      this.dataService.sendGetRequest1().subscribe((data: any[])=>{
      console.log(data);
      this.results = data;
    }) 
  }


}
