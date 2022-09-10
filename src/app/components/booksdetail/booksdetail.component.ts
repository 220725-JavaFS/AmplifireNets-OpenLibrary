import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Result } from 'src/app/models/result';
import { BookService } from 'src/app/services/book.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-booksdetail',
  templateUrl: './booksdetail.component.html',
  styleUrls: ['./booksdetail.component.css']
})

export class BooksdetailComponent implements OnInit {

  constructor(private  bookService: BookService, private route: ActivatedRoute) {}

    id: any = "";    
    books: Book[] = [];
    formats: String = ""

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.bookService.getBookByIds(this.id)
    .pipe(map<Result, Book[]>((result: Result) => result.results))
    .subscribe({
      next: (books: Book[]) => this.books = books.slice(0,21),
      error: () => {
        this.books = [];
        console.log("Could not retrieve any books");
      }
    });
  }   

    showBook(): void {
    this.bookService.getBookByIds(this.id)
    .pipe(map<Result, Book[]>((result: Result) => result.results))
    .subscribe({
      next: (books: Book[]) => this.books = books.slice(0,21),
      error: () => {
        this.books = [];
        console.log("Could not retrieve any books");
      }
    });
  }
}

