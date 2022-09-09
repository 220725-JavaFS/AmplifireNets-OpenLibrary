import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  hasClicked = false;
  books: Book[] = [];
  constructor(private bookService: BookService) {  }

  ngOnInit(): void {
    //this.bookService.getFeaturedBooks((result))
  }

  addBook(){
    alert("Book added!");
    //add book object to array
  }
}
