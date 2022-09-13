import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { observable, Observable } from "rxjs";
import { Book } from "../models/book";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  urlDatabase: string = "http://18.218.155.146:8083/data/register";

  // response = this.httpClient.post<String>(this.urlDatabase, user);

  doPost(user: User): void {
    let response = this.httpClient.post<any>(this.urlDatabase, user, {headers: {'Content-type': 'text/plain'}});
    response.subscribe((x) => {
      console.log(x);
    });
    this.router.navigate(["/"]);
  }
}
