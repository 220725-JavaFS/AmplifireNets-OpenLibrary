import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./components/books/books.component";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
  { path: "books", component: BooksComponent },
  { path: "users", component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
