import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private bookService: BookService) { };
  ngOnInit(): void {

  }

  invisible:boolean = true;
  books: Book[] = [];

  titleSearch:string ="";
  authorSearch:string="";
  topicSearch:string="";


  showByTitle(): void{
    this.invisible = false;

    this.bookService.getBooksByTitle(this.titleSearch)
        .pipe(map<Result, Book[]>((result: Result) => result.results))
        .subscribe({
          next: (books: Book[]) => this.books = books.slice(0,20),
          error: () => {
            this.books = [];
            console.log("Could not retrieve any books");
          }
        });
  }

showByAuthor(): void{
  this.invisible = false;

  this.bookService.getBooksByAuthor(this.authorSearch)
      .pipe(map<Result, Book[]>((result: Result) => result.results))
      .subscribe({
        next: (books: Book[]) => this.books = books.slice(0,20),
        error: () => {
          this.books = [];
          console.log("Could not retrieve any books");
        }
      });
}

showByTopic(): void{
  this.invisible = false;

  this.bookService.getBooksByTopic(this.topicSearch)
      .pipe(map<Result, Book[]>((result: Result) => result.results))
      .subscribe({
        next: (books: Book[]) => this.books = books.slice(0,20),
        error: () => {
          this.books = [];
          console.log("Could not retrieve any books");
        }
      });
}
}