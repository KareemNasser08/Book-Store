import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  hide: boolean = true;

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  resetPasswordForm = new FormGroup({
    otp: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  onResetPasswordForm(data: FormGroup) {
    this._AuthService.onResetPassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {
        console.log('Success Request Ya 3am Kareem');
        this._Router.navigate(['auth/login']);
      },
    })
  }
}
