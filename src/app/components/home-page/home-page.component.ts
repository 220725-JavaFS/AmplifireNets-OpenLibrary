import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { map } from 'rxjs';
import { Result } from 'src/app/models/result';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  hasClicked = false;
  books: Book[] = [];
  constructor(private bookService: BookService) {  };

  ngOnInit(): void {
    this.bookService.getFeaturedBooks()
        .pipe(map<Result, Book[]>((result: Result) => result.results))
        .subscribe({
          next: (books: Book[]) => this.books = books.slice(0,21),
          error: () => {
            this.books = [];
            console.log("Could not retrieve any books");
          }
        });
  }

  addBook(){
    alert("Book added!");
    //add book object to array
  }
}
