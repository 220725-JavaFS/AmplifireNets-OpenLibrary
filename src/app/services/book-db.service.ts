import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookDBService {

  constructor(private httpClient:  HttpClient) { }

  urlDatabase:string = "http://18.218.155.146:8083/data/books";

  doGet():Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.urlDatabase);
  }

  doPost(id:number): Observable<Book> {
    return this.httpClient.post<Book>(this.urlDatabase, id);
  }

  doDelete(id:number):Observable<Book>{
    return this.httpClient.delete<Book>(this.urlDatabase+id);
  }

}
