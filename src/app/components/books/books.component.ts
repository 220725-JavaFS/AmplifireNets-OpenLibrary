import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { map } from 'rxjs';
import { take } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['../home-page/home-page.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  sectionTitle: string = "Featured Books";

  addBook() {console.log("Book added")};

  constructor(private bookService: BookService) { };

  ngOnInit(): void {
    this.bookService.getFeaturedBooks()
        .pipe(map<Result, Book[]>((result: Result) => result.results))
        .subscribe({
          next: (books: Book[]) => this.books = books.slice(0,9),
          error: () => {
            this.books = [];
            console.log("Could not retrieve any books");
          }
        });
  }

}
