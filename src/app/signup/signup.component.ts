import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { UserNew } from '../shared/models/user-new.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupProcess = false;
  error = new FormControl('', [Validators.required, Validators.email]);
  signupForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService) {
    this.signupProcess = false;
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      phone: new FormControl([null, Validators.required, Validators.minLength(7), Validators.maxLength(10)]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
        password: new FormControl(null, Validators.required),
        passwordSegurity: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.signupProcess = true;
        const { firstName, userName, phone, email, password, passwordSegurity } = this.signupForm.value;
        const newuser = new UserNew( firstName, userName, phone, email, password, passwordSegurity);
      if (password === passwordSegurity) {
        this.authService.signup(newuser)
        .subscribe(
          this.authService.login
        );
      }
    }
  }

  getErrorMessage() {
    return this.error.hasError('required') ? 'Digite su ' :
        this.error.hasError('email') ? 'Campo incorrecto ' :
            '';
  }
}
