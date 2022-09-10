import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Book } from 'src/app/models/book';

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
  
  }

  switchVisible():void {
    this.visibility = !this.visibility;
  }


}
