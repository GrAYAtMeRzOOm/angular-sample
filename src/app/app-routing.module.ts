import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthenticationService} from "./service/authentication/authentication.service";
import {EmployeeComponent} from "./model/employee/employee.component";
import {AuthGuardService} from "./service/auth-gurd/auth-guard.service";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";

const routes: Routes = [
  {path:'',component:EmployeeComponent,canActivate:[AuthGuardService]},
  {path:'addEmployee',component:AddEmployeeComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthenticationService]},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}

