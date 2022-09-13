import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { NavServicesService } from 'src/app/services/nav-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public nav: NavServicesService, public checkout: CheckoutService ) { }

  ngOnInit(): void {
  }

  change(){
    this.nav.toggle();
    this.checkout.clearCart();
  }
}
