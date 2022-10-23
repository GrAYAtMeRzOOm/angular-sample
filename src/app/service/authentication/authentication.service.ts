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
    return !(user == null);
  }
  setUserLogout(){
    if(this.isUserLoggedIn()){
    sessionStorage.removeItem("username");
    }else{
      alert("cannot find user");
    }
  }
}
