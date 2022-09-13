import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  newLogin = new User(0, "", "", "", "");
  enabler = "";

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginService.doGet(this.newLogin);
    this.enabler = "active";
  }

  showPassword() {
    let pass = document.getElementById("password") as HTMLInputElement;
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
}
