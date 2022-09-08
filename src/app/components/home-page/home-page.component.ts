import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  hasClicked = false;
  // books:Book[] = [];
  constructor(private checkoutService:CheckoutService) {  }

  ngOnInit(): void {
    
  }

  addBook(){
    alert("Book added!");
    //add book object to array
  }



}
