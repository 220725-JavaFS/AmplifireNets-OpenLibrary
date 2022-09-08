import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/service/checkout.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

 // books:Book[] = [];

 visibility:boolean = false;

  constructor(private checkoutService:CheckoutService) { }

  ngOnInit(): void {
    /* To get the Books info from the API

    this.checkoutService.getBooks().subscribe({
      next:(data:Book[])=>{
        this.books=data;
      },
      error:()=>{
        console.log("Failed to load book");
      }
    }); */
  }

  switchVisible():void {
    this.visibility = !this.visibility;
  }


}
