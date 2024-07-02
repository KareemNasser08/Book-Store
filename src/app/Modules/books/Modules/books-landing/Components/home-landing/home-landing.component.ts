import { Component } from '@angular/core';
import { BooksService } from '../../Services/books.service';
import { Book } from '../../Interfaces/book';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent {

  allBooks: Book[] = [];

  getAllBooks() {
    this._books.getAllBooks().subscribe({
      next: (res) => {
        console.log(res);
        this.allBooks.push(res.data);
        console.log(this.allBooks);

      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed request');


      }
    })
  }

  constructor(private _books: BooksService) { }
  ngOnInit(): void {
    this.getAllBooks();
  }


}
