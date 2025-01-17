import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl = 'https://upskilling-egypt.com:3007/api/';
    const token = localStorage.getItem('userToken');

    let newRequest = request.clone({
      url: request.url.includes('assets') ? request.url : baseUrl + request.url,
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'language': 'en'
      }
    })
    return next.handle(newRequest);
  }
}
