
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

  constructor(private loginService: LoginService) {}

  constructor(private loginService:LoginService, private nav: NavServicesService) { }
  ngOnInit(): void {}


  onSubmit() {
    this.loginService.doGet(this.newLogin);
    this.toggleNavComponents();
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
