import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { BooksComponent } from "./components/books/books.component";
import { UsersComponent } from "./components/users/users.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';


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
    path: "search", 
    component: SearchPageComponent 
  },
  { 
    path: "register", 
    component: RegisterPageComponent 
  },
  { 
    path: "login", 
    component: LoginPageComponent 
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
