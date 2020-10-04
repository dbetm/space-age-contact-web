import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  ngOnInit(): void {
  }

  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) {
      this.form = this.fb.group({
        email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
        password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      });
  }

  public signInUser() {
    this.authService.signin(
      this.form.get('email').value,
      this.form.get('password').value
    );
  }

}
