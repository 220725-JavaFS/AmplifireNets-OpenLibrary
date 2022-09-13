import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userInput = "";
  passInput = "";

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.loginService.doPost(this.userInput, this.passInput);
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
