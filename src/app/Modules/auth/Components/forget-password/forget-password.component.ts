import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  forgetPasswordForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  onSubmitForget(data: FormGroup) {
    this._AuthService.onForgetPassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this._Router.navigate(['auth/reset-password'])
      }
    })
  }
}
