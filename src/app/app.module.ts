import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { UsersComponent } from './components/users/users.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ImageSizePipePipe } from './pipes/image-size-pipe.pipe';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FormsModule } from '@angular/forms';
import { BooksdetailComponent } from './components/booksdetail/booksdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    UsersComponent,
    HomePageComponent,
    NavBarComponent,
    CheckoutPageComponent,
    ImageSizePipePipe,
    SearchPageComponent,
    BooksdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
