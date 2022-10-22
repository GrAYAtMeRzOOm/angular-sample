import {Component,OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication/authentication.service";

@Component({
  selector:'app-login',
  templateUrl:'login.component.html',
  styleUrls:['login.component.css']
})

export class LoginComponent {
  username = '';
  password = '';
  isValidLogin = false;
  constructor(private router:Router,private loginService:AuthenticationService) {}

  ngOnInit(){

  }
  checkLogin(){
    if(this.loginService.authenticate(this.username,this.password)){
      this.router.navigate(['']);
      this.isValidLogin = false;
    }else{
      this.isValidLogin = true;
    }
    return this.isValidLogin;
  }
}
