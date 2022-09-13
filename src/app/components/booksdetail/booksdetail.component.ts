import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Result } from 'src/app/models/result';
import { BookService } from 'src/app/services/book.service';
import { map } from 'rxjs';
import { HttpClient } from'@angular/common/http';
import { CheckoutService } from 'src/app/services/checkout.service';


@Component({
  selector: 'app-booksdetail',
  templateUrl: './booksdetail.component.html',
  styleUrls: ['./booksdetail.component.css']
})

export class BooksdetailComponent implements OnInit {

  books: Book[] = [];

  constructor(private  bookService: BookService, private route: ActivatedRoute, private html: HttpClient,
    private checkoutService: CheckoutService ) {}

    id: any = "";    
    formats: any = ""
    key: string = ""
    val: string = "11";
    title: any = "";
  
    

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.html.get('https://www.gutenberg.org/files/' + this.id + '/' + this.id + '.txt' ,{responseType:'text'})
      .subscribe(res=>{
      this.formats = res.slice(17640,18420);
    })

    this.html.get('https://www.gutenberg.org/files/' + this.id + '/' + this.id + '-0.txt' ,{responseType:'text'})
      .subscribe(res=>{
      this.formats = res.slice(17640,18420);
    })


    this.bookService.getBookById(this.id) 
        .subscribe(book=>{
          next:
          error: () => {
            this.books = [];
            console.log("Could not retrieve any books");
          }
        });
  }


  


  

}

