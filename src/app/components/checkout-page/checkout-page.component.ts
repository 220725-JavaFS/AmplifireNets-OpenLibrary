import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Result } from 'src/app/models/result';
import { map } from 'rxjs';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  books:Book[] = [];
  visibility:boolean = false;

  constructor(private checkoutService:CheckoutService) { }

  ngOnInit(): void {
    this.getBookshelf();
  }

  getBookshelf(){
    this.checkoutService.getBooks().subscribe({
      next:(data:Book[])=>{
        this.books=data;
      },
      error:()=>{
        console.log("unable to retrieve Todos");
      }
    });
  }

  removeBook(book:Book){
    this.checkoutService.removeFromCart(book);
    this.getBookshelf();
  }

  switchVisible():void {
    this.visibility = !this.visibility;
  }



}
