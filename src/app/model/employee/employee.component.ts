import {Component, OnInit} from "@angular/core";
import {Employee, HttpClientService} from "../../service/httpclient/httpclient.service";

@Component({
  selector: "app-employee",
  templateUrl: "employee.component.html",
  styleUrls: ["employee.component.css"]
})

export class EmployeeComponent implements OnInit {
  employees: Employee[] | undefined;
  selectedFiles: boolean =false;
  message: any;
  progressInfos:any;

  constructor(
    private httpClient: HttpClientService) {
  }

  ngOnInit() {
    this.httpClient.getEmployees().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  private handleSuccessfulResponse(response: Employee[] | undefined) {
    this.employees = response;
  }

  deleteEmployee(employee: Employee): void {
    this.httpClient.deleteEmployee(employee).subscribe(
      data => {
        // @ts-ignore
        this.employees = this.employees.filter(u => u !== employee);
        alert("Employee Deleted Successfully");
      })
  };

  uploadFiles() {

  }

  selectFiles($event: Event) {

  }
}
