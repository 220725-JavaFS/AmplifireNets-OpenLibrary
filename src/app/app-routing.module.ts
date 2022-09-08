import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { BooksComponent } from "./components/books/books.component";
import { UsersComponent } from "./components/users/users.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:"",
    component: HomePageComponent
  },
  {
    path:"home",
    component: HomePageComponent
  },
  {
    path:"checkout",
    component: CheckoutPageComponent
  },
  { 
    path: "books", 
    component: BooksComponent 
  },
  { 
    path: "users", 
    component: UsersComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
           FormsModule,
           HttpClientModule
          ]
})
export class AppRoutingModule {};
