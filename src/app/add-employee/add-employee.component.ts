import {Component, OnInit} from "@angular/core";
import {Employee, HttpClientService} from "../service/httpclient/httpclient.service";

@Component({
  selector:'app-add-employee',
  templateUrl:'add-employee.component.html',
  styleUrls:['add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit{
  user:Employee = new Employee("","","","");

  constructor(
    private httpcleintService:HttpClientService
  ) {}

  ngOnInit(){}

  createEmployee():void{
    this.httpcleintService.createEmployee(this.user).subscribe(data =>
      alert("Employee created Successfully")
    )
  }
}
