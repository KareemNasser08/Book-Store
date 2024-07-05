import { Component } from '@angular/core';
import { BooksService } from '../../Services/books.service';
import { Book, GetAllBooksApi } from '../../Interfaces/book';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  Books: Book[] = [];

  constructor(private _books: BooksService) { }

  getBooks(): void {
    this._books.getAllBooks().subscribe({
      next: (res: GetAllBooksApi) => {
        this.Books = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
