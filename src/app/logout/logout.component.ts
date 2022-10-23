import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.css']
})

export class LogoutComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.authenticationService.setUserLogout();
    this.router.navigate(['login']).then(r => alert("User Session Closed"));
  }
}
