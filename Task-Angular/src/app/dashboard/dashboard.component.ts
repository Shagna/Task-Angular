import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../_services/data.service';
import {Getapi } from '../home/home.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  products: any[];
 
  @Input() getapi:Getapi;

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
