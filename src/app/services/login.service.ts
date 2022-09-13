import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  urlDatabase: string = "http://18.218.155.146:8083/data/login?";

  doGet(user: User): void {
    console.log(
      this.urlDatabase +
        "userName=" +
        user.userName +
        "&password=" +
        user.password
    );
    let response = this.httpClient.get<any>(
      this.urlDatabase +
        "userName=" +
        user.userName +
        "&password=" +
        user.password,
      { headers: {}, responseType: "text" as "json", withCredentials: false }
    );
    response.subscribe((x) => {
      console.log(x);
      this.cookieService.set("sessionID", x);
      console.log("==================");
      console.log(this.cookieService.get("sessionID"));
      this.router.navigate(["/"]);
    });
  }
}
