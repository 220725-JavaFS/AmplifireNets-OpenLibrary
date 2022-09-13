import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  books:Book[] = [];

  getBooks():Observable<Book[]>{
    return of(this.books);
  
  }

  addToCart(book: Book): void {
    if (!this.books.some((item: Book) => item.id === book.id)) {
      this.books.push(book);
      window.alert(`${book.title} was added to your bookshelf!`);
    } else {
      window.alert("You're already borrowing that book!")
    }
  }

  removeFromCart(book: Book) {
    //this.books = this.books.filter((item: Book) => item.id !== book.id);

    let booksIndex = this.books.findIndex((item: Book) => item.id === book.id);
    if (booksIndex > -1) {
      this.books.splice(booksIndex, 1);
    }
  }

  getItems(){
    return this.books;
  }

  clearCart(): void {
    this.books = [];
  }


}
