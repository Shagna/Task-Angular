import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any[];


  constructor(
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    }) 
    
  }

}
