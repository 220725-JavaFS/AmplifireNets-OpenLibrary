import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userInput = document.getElementById("username") as HTMLInputElement;
  passInput = document.getElementById("password") as HTMLInputElement;

  constructor(loginService:LoginService, user:User) { }

  ngOnInit(): void {
  }

  getInput(userName: User, password: User){
    
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
