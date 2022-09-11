import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  books:Book[] = [];

  addToCart(book: Book): void {
    if (!this.books.some((item: Book) => item.id === book.id)) {
      this.books.push(book);
      window.alert(`${book.title} was added to your bookshelf!`);
    } else {
      window.alert("You're already borrowing that book!")
    }
  }

  removeFromCart(book: Book): void {
    this.books = this.books.filter((item: Book) => item.id !== book.id);
  }

  getItems(): Book[] {
    return this.books;
  }

  clearCart(): void {
    this.books = [];
  }
}
