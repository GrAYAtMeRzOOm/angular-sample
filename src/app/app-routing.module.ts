import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthenticationService} from "./service/authentication/authentication.service";
import {EmployeeComponent} from "./model/employee/employee.component";
import {AuthGurdService} from "./service/auth-gurd/auth-gurd.service";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";

const routes: Routes = [
  {path:'',component:EmployeeComponent,canActivate:[AuthGurdService]},
  {path:'addEmployee',component:AddEmployeeComponent,canActivate:[AuthGurdService]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthenticationService]},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}

