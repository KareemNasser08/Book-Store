import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  onLogin(data: FormGroup) {
    console.log(data.value);
    this._AuthService.onLogIn(data.value).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('userToken', res.data.accessToken);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this._Router.navigate(['/books'])
      }
    })
  }
}