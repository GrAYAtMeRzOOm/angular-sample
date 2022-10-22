import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class Employee {
  constructor(
    public empId: String,
    public name: String,
    public designation: String,
    public salary: String,
  ) {
  }

}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  constructor(
    private httpclient: HttpClient
  ) {
  }

  getEmployees() {
    let basicString = this.getHeaders();
    let headers = new HttpHeaders(
      {Authorization: basicString}
    );
    console.log("getEmployees invoked");
    return this.httpclient.get<Employee[]>("http://localhost:8080/employees", {headers});
  }

  public deleteEmployee(employee:Employee) {
    return this.httpclient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId);
  }

  public createEmployee(employee: Employee){
    return this.httpclient.post<Employee>("http://localhost:8080/employees",employee);
  }

  getHeaders(){
    let username = "admin";
    let password = "123";
    return 'Basic' + window.btoa(username + ":" + password);
  }

}
