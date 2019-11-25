import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-display-emp',
  templateUrl: './display-emp.component.html',
  styleUrls: ['./display-emp.component.css']
})
export class DisplayEmpComponent implements OnInit {

  empList=[];
  constructor(private service: CommonService) { }

  ngOnInit() {
    this.getAllEmployees();
  }
  
  getAllEmployees():void{
      this.service.getAllEmployees().subscribe (
       data => this.empList = data
     );
  }

}
