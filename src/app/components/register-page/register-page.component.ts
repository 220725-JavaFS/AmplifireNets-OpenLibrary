import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/user";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.css"],
})
export class RegisterPageComponent implements OnInit {
  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}

  bool:boolean=true;

  newUser = new User(0, "", "", "", "");

  async onSubmit() {
    //console.log(this.registerService.doPost(this.newUser));

    if (this.newUser.userName.trim()==="user" && this.newUser.password.trim()==="user"){
      this.bool=false;
    }
    
  }

  showPassword() {
    let pass = document.getElementById("passwordId") as HTMLInputElement;
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
}
