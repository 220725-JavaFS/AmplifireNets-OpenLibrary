import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:  HttpClient) { }

  urlDatabase:string = "http://18.218.155.146:8083/data/login?";

  doPost(userName: string, password: string): Observable<User> {
    let body = {};
    return this.httpClient.post<User>(this.urlDatabase + "userName=" + userName + "&password=" +password, body);
  }

}
