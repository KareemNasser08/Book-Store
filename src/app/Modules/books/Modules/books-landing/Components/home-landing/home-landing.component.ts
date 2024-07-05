import { Component } from '@angular/core';
import { BooksService } from '../../Services/books.service';
import { Book, GetAllBooksApi } from '../../../../Interfaces/book';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent {

  // allBooks: Book[] = [];
  // constructor(private _books: BooksService) { }

  // getAllBooks() {
  //   this._books.getAllBooks().subscribe({
  //     next: (res: GetAllBooksApi) => {
  //       // console.log(res);
  //       this.allBooks = res.data;
  //       // console.log(this.allBooks);

  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log('completed request');
  //     }
  //   })
  // }

  
  // ngOnInit(): void {
  //   this.getAllBooks();
  // }


}
