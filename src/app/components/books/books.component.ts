import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['../home-page/home-page.component.css']
})
export class BooksComponent implements OnInit {

  @Input() books: Book[] = [];

  addBook() {console.log("Book added")};

  constructor(private bookService: BookService , route: ActivatedRoute) { };
  

  ngOnInit(): void {}

  trackByBookID(index: number, book: Book){
    return book.id;
  }

}
