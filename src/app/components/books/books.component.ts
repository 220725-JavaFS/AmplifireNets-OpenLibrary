import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['../home-page/home-page.component.css']
})
export class BooksComponent implements OnInit {

  @Input() books: Book[] = [];

  addBook() {console.log("Book added")};

  constructor(private bookService: BookService) { };

  ngOnInit(): void {};

}
