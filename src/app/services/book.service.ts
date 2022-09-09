import { Injectable, ɵisBoundToModule } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Book } from '../models/book';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  gutendexBaseUrl: string = 'https://gutendex.com/books';

  getBooksByMethod(key: string, val: string): Observable<Result> {
    const params = new HttpParams().set(key, val);
    return this.http.get<Result>(this.gutendexBaseUrl, {params});
  }

  getBooksByTopic(topic: string): Observable<Result> {
    return this.getBooksByMethod('topic', topic);
  }

  getBooksByAuthor(author: string): Observable<Result> {
    return this.getBooksByMethod('search', author);
  }

  getBooksByTitle(title: string): Observable<Result> {
    let newTitle:any = title;
    newTitle.replaceAll(' ', '%20');

    return this.getBooksByMethod('search', newTitle);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.gutendexBaseUrl + `/${id}`);
  }

  getFeaturedBooks(): Observable<Result> {
    return this.http.get<Result>(this.gutendexBaseUrl);
  }

  constructor(private http: HttpClient) { }
}
