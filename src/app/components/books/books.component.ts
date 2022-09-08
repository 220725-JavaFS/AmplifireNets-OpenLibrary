import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { };

  ngOnInit(): void {
    this.bookService.getBooksByTopic('physics')
        .pipe(map<Result, Book[]>((result: Result) => result.results))
        .subscribe({
          next: (books: Book[]) => this.books = books,
          error: () => {
            this.books = [];
            console.log("Could not retrieve any books");
          }
        });
  }

}
