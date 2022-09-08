import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  //books:Book[] = [];

  url:string = 'https://gutendex.com/books/'

  constructor(private httpClient:HttpClient) { }

 /* getBooks():Observable<Book[]>{
    return this.httpClient.get(this.url,{
      headers:{
      accept:"application/json"
    }
  }) as Observable<Book[]>;
} */
}
