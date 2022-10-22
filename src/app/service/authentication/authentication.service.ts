import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor() {
  }

  authenticate(username: string, password: string) {
    if (username == "abc" && password == "123") {
      sessionStorage.setItem("username", username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");

    console.log(!user == null);
    console.log(sessionStorage.length);
    return !(user == null);
  }
  setUserLogout(){
    sessionStorage.removeItem("username");
  }
}
