import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { NavServicesService } from 'src/app/services/nav-services.service';



@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  newLogin = new User(0, "", "", "", "");
  bool:boolean=true;

  constructor(private loginService:LoginService, private nav: NavServicesService) { }
  ngOnInit(): void {}


  onSubmit() {
    if (this.newLogin.userName.trim()==="user" && this.newLogin.password.trim()==="user"){
      this.toggleNavComponents();
      this.bool=false;
    }
    else{
      window.alert("invalid login!")
    }

    //this.loginService.doGet(this.newLogin);
  }

  toggleNavComponents(){
    this.nav.toggle();
  }

  showPassword(){
    let pass = document.getElementById("password") as HTMLInputElement;
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
}
