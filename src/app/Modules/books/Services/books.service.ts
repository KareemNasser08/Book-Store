import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllBooksApi } from '../Interfaces/book';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _HttpClient:HttpClient) { }

  getAllBooks():Observable<GetAllBooksApi>{
    return this._HttpClient.get<GetAllBooksApi>('book');
  }
}
