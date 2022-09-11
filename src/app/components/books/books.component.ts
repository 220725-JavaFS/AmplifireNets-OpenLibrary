import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['../home-page/home-page.component.css']
})
export class BooksComponent implements OnInit {

  @Input() books: Book[] = [];

  addBook(book: Book): void {
    this.checkoutService.addToCart(book);
    console.log(this.checkoutService.books.length);
  };

  constructor(private checkoutService: CheckoutService) { };

  ngOnInit(): void {};

}
