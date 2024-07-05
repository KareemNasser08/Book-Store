import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, GetAllBooksApi } from '../../../Interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _HTTPClient: HttpClient) { }

  getAllBooks(): Observable<GetAllBooksApi> {
    return this._HTTPClient.get<GetAllBooksApi>('book');
  }

}
