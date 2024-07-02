import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  onLogIn(data: FormGroup): Observable<any> {
    return this._HttpClient.post('auth/login', data);
  }

  onRegister(data: FormGroup): Observable<any> {
    return this._HttpClient.post('auth/register', data);
  }

  onForgetPassword(data: FormGroup): Observable<any> {
    return this._HttpClient.post('auth/forgot-password', data);
  }

  onResetPassword(data: FormGroup) {
    return this._HttpClient.post('auth/reset-password', data);
  }
}
