<<<<<<< HEAD
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./components/books/books.component";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
  { path: "books", component: BooksComponent },
  { path: "users", component: UsersComponent },
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout"
import { HomePageComponent } from './component/home-page/home-page.component';
import { CheckoutPageComponent } from './component/checkout-page/checkout-page.component';
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
}

>>>>>>> 36dbb93a296f5031fea968e90a0bbfdb2375351b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
=======
  exports: [RouterModule,
           FlexLayoutModule,
           FormsModule,
           HttpClientModule
          ]
>>>>>>> 36dbb93a296f5031fea968e90a0bbfdb2375351b
})
export class AppRoutingModule {}
